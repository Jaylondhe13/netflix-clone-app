import { useEffect, useState } from 'react';
import './Banner.css'
import axios from './axios.js';
import requests from './Request';

const Banner = () => {

    const [movie, setMovie] =useState([]);

    useEffect(()=>{
        const fetchData = ()=>{
            axios.get(requests.fetchTrending).then((res)=>{
                setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
              }).catch(()=>{
                console.log("error")
              })

        }
     

    fetchData();

    },[])
    
    console.log(movie);
    const truncate = (string, n) => {
        return string.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>

            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_title
}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>

                </div>
                <h1 className='banner_describtion'>
                    {truncate(`${movie?.overview}`, 150)}</h1>

            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}

export default Banner;