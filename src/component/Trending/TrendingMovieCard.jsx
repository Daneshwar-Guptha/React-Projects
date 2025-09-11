import { useState } from 'react'; 
import './TrendingMovieCard.css'
const TrendingMovieCard = (props) => {
    const [details,setDetails]= useState()
    const { value } = props;
    const { backdrop_path, original_title, overview, first_air_date,name,release_date} = value

    const TrendingMovieCardObject = {
        backdropPath: backdrop_path,
        originalName: original_title,
        overview: overview,
        firstAirDate: first_air_date,
        MovieName:name,
        releaseDate:release_date

    }
    


    return (
        <>
            
                <div className="movieCard-container">
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
