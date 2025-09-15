
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
const MovieItem = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState("")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM3Mzk2YWQ0OTE5NWIzNGRjODdmNWM1NmUyYzJlNiIsIm5iZiI6MTc1Njk4MzE2OS4yMTQwMDAyLCJzdWIiOiI2OGI5NmY4MTIxYTAyM2RmOGE5YmY1NzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PkTl1TUeliEXdcT3ZyuGP5DHzoOnQCU5fz_o_aeM7zg'
        }
    };

    useEffect(() => {
        const getDetailsById = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            const data = await response.json();
            console.log(data);
            setMovie(data)

        }
        getDetailsById()
    }, [])


    return (
        <>

            <Link to="/"><h1>Home</h1></Link>

            <div >
                <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} className="image" />



                <div>
                    <h1>{movie.title}</h1>
                    
                </div>

            </div>




        </>
    )

}
export default MovieItem;

