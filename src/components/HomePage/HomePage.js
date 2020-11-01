import React from 'react'
import Row from '../../Row/Row';
import requests from './../../api/Requests';
import Banner from './../Banner/Banner';
import NavBar from './../Nav/NavBar';



function HomePage() {
    return (
        <div>
             <NavBar/>
             <Banner/>
                <br/>

             <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
             />

             <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>

             <Row  title="Top Rated" fetchUrl={requests.fetchTopRated}/>

             <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

             <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

             <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
  
             <Row  title="Romance" fetchUrl={requests.fetchRomanceMovies}/>

             <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

        </div>
    )
}

export default HomePage
