import React, { useEffect, useState } from 'react';
import instance from './../../api/api';
import requests from './../../api/Requests';
import './Banner.scss';



function Banner() {

    const [movie, setMovie] = useState([]);


useEffect(()=>{
    async function fetchData(){
        const request =await instance.get(requests.fetchNetflixOriginals)

        // random generator  movie generator for banne
        // Math.floor(Math.random()* request.data.results.length - 1)
setMovie(request.data.results[
    Math.floor(Math.random()* request.data.results.length - 1)
        ]);
        return request
    };
    fetchData();
},[])


    return (
        <>
            <header className='banner'
            
            style={{backgroundSize:"cover",
            backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}
            >
                <div className='banner_contents'>
                    <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className='banner_buttons'>
                        <button className='banner_button'>
                            Play
                        </button>

                        <button className='banner_button'>
                            My List
                        </button>
                    </div>

    <h1 className='banner_description'>{movie?.overview}</h1>
                </div>

            </header>

        </>
    )
}

export default Banner
