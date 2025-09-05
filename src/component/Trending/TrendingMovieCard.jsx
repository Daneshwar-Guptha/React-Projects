import './TrendingMovieCard.css'
const TrendingMovieCard = (props) => {
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
// adult
// :
// false
// backdrop_path
// :
// "/qg8Gv2w0dDL8cMsG2QO2hWp58wy.jpg"
// first_air_date
// :
// "2022-11-23"
// genre_ids
// :
// (3)[10765, 9648, 35]
// id
// :
// 119051
// media_type
// :
// "tv"
// name
// :
// "Wednesday"
// origin_country
// :
// ['US']
// original_language
// :
// "en"
// original_name
// :
// "Wednesday"
// overview
// :
// "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy."
// popularity
// :
// 699.6075
// poster_path
// :
// "/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg"
// vote_average
// :
// 8.399
// vote_count
// :
// 9592