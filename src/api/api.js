//API V3 //53954435ec1a7a9a707949c662f1721e  themovidedb


import axios from 'axios';


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;