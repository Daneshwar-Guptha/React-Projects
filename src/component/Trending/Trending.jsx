import { useEffect, useState } from "react"
import TrendingMovieCard from './TrendingMovieCard'
import './TrendingMovieCard.css'

const Trending = () => {
    const [TrendingMovies, setTrendingMovies] = useState([])
    const [status, setStatus] = useState(true)
    const mode = status ? "day" : "week";


    const changeMethod = () => {
        setStatus(!status)
    }



    const getTrendingDetails = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg'
            }
        };
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/${mode}?language=en-US`, options)
        const data = await response.json();
        const result = data.results
        setTrendingMovies(result)

    }

    useEffect(() => {
        getTrendingDetails()
    }, [mode])

    return (
        <>
            <div className="trending-conatiner">
                <h1>Trending Movies</h1>
                <div onClick={changeMethod}>
                    <button className={status ? "active" : ""}>Day</button>
                    <button className={!status ? "active" : ""}>Week</button>
                </div>
            </div>


            <ul className="main-container ">
                {TrendingMovies.map(eachItem => (

                    <TrendingMovieCard key={eachItem.id} value={eachItem} />

                ))}
            </ul>
        </>
    )

}

export default Trending
