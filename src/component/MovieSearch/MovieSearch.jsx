import { useState } from "react"
import { useEffect } from "react"
import CardItems from "../CardItems/CardItems"

const MovieSearch = () => {
    const [movieData, setMovieData] = useState([])
    const [userInput, setUserInput] = useState("");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg'
        }
    };


    const getMoviesDetails = async (userInput) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${userInput}&include_adult=false&language=en-US&page=1`, options)
        const data = await response.json()
        console.log(data.results)
        setMovieData(data.results)
    }




    function getMovieDetails(event) {

        setUserInput(event.target.value);


    }
    function searchMovies() {

        getMoviesDetails(userInput)

    }

    return (
        <>
            <h1>Enter movie Name</h1>

            <input type="text" id="searchMovies" onChange={getMovieDetails} />

            <button onClick={searchMovies}>Search</button>


           

                {movieData.map(eachItem => (
                  < CardItems key={eachItem.id} value = {eachItem}/>
                ))}
         


        </>
    )


}

export default MovieSearch


