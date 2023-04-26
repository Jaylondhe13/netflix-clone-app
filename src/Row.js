import { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const baseUrl = "https://image.tmdb.org/t/p/original";


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results);
        })


    }, [fetchUrl])

    return <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">

        {movies.map((movie) => {

           return ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))&&(
                <img
                className={`row_poster ${isLargeRow&& "row_posterLarge"}`}
                key={movie.id}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path

                    }`} alt={movie.name}

            />
            )
            
        })}

        </div>
       
    </div>
}

export default Row;