import { useState,useEffect } from "react";
import TrendingMovieCard from "../Trending/TrendingMovieCard";
const Popular = ()=>{



    const [TrendingMovies, setTrendingMovies] = useState([])
    



    const getTrendingDetails = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg'
            }
        };
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const data = await response.json();
        const result = data.results
        setTrendingMovies(result)

    }

    useEffect(() => {
        getTrendingDetails()
    }, [])

    return (
        <>
            <h1>Popular</h1>


            <ul className="main-container ">
                {TrendingMovies.map(eachItem => (

                    <TrendingMovieCard key={eachItem.id} value={eachItem}  />

                ))}
            </ul>
        </>
    )
}
export default Popular


 