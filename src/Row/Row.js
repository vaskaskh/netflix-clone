import React, { useEffect, useState } from 'react';
import './Row.scss';
import instance from '../api/api';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';




const base_url= 'https://image.tmdb.org/t/p/original/';
 


function Row({title, fetchUrl, isLargeRow}) {


    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

// component mounts

// react-youtube opts
const opts = {
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1, 
    }
}

// user click on pic

const handleClick =(movie)=>{
    if(trailerUrl){
        setTrailerUrl("");
    }else{
        movieTrailer(movie?.name || "")
        .then(url =>{
            const urlParams = new URLSearchParams( new URL(url).search);
             setTrailerUrl(urlParams.get('v'))
        })
        .catch(error=> console.log(error))
    }
}


useEffect(()=>{
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results); // set movies in state
            return request;
        }
        fetchData();

    },[fetchUrl]); 

    // if any variable is outside of block useEffect you have to include in [] -> here in this case fetchUrl 

    return (
        <div className='row'>
            <h2>{title}</h2>
                <div className='row_posters'>
                    {
                        movies.map(movie=>(
                          <img
                            key={movie.id}
                            onClick={()=> handleClick(movie)}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            className={`row_posters_images ${isLargeRow && "row_posters_large"}`}
                            
                            
                          />
                        ))
                    }
                </div>  

                
                { 
                trailerUrl &&
                <YouTube videoId={trailerUrl} opts={opts}/>
                }
            </div>
    )
}

export default Row
