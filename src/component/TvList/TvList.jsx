import { useState, useEffect } from "react";
import TrendingMovieCard from "../Trending/TrendingMovieCard";
import './TvList.css'
const TvList = () => {



    const [TrendingMovies, setTrendingMovies] = useState([])
    const [mode, setMode] = useState("airing_today")




    const getTrendingDetails = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg'
            }
        };
        const response = await fetch(`https://api.themoviedb.org/3/tv/${mode}?language=en-US&page=1`, options)

        const data = await response.json();
        const result = data.results
        setTrendingMovies(result)

    }

    useEffect(() => {
        getTrendingDetails()
    }, [mode])

    return (
        <>
            <h1>TV SERIES LISTS</h1>
            <div className="button-group">
                <button
                    className={mode === "airing_today" ? "active" : ""}
                    onClick={() => setMode("airing_today")}
                >
                    Airing Today
                </button>
                <button
                    className={mode === "on_the_air" ? "active" : ""}
                    onClick={() => setMode("on_the_air")}
                >
                    On The Air
                </button>
                <button
                    className={mode === "popular" ? "active" : ""}
                    onClick={() => setMode("popular")}
                >
                    Popular
                </button>
                <button
                    className={mode === "top_rated" ? "active" : ""}
                    onClick={() => setMode("top_rated")}
                >
                    Top Rated
                </button>
            </div>


            <ul className="main-container ">
                {TrendingMovies.map(eachItem => (

                    <TrendingMovieCard key={eachItem.id} value={eachItem} />

                ))}
            </ul>
        </>
    )
}
export default TvList


