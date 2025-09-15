import { useState } from 'react';
import './TrendingMovieCard.css';
import MovieItem from '../MovieItem/MovieItem'
import { useNavigate } from 'react-router-dom';



const TrendingMovieCard = (props) => {
    const [details, setDetails] = useState();
    const [userDeatils, setUserDeatils] = useState() //Routes
    const [status, setStatus] = useState(false);  //Routes
    const { value } = props;
    const { backdrop_path, original_title, overview, first_air_date, name, release_date, id } = value

    const navigate = useNavigate()


    const TrendingMovieCardObject = {
        backdropPath: backdrop_path,
        originalName: original_title,
        overview: overview,
        firstAirDate: first_air_date,
        MovieName: name,
        releaseDate: release_date,
        id: id

    }
    const getDeatilsOfMovie = () => {
        setUserDeatils(id);
        setStatus(true)
        navigate(`/details/${id}`)


    }
    console.log(userDeatils)



    return (
        <>

            <div className="movieCard-container" onClick={getDeatilsOfMovie}>
                <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${TrendingMovieCardObject.backdropPath}`} className="image" />
                <div className='movieCard-container-text'>
                    <p>{TrendingMovieCardObject.originalName || TrendingMovieCardObject.MovieName}</p>
                    <p>{TrendingMovieCardObject.firstAirDate || TrendingMovieCardObject.releaseDate} </p>

                </div>
            </div>
          



        </>
    )


}
export default TrendingMovieCard
