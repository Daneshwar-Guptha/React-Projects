import './CardItems.css'
const CardItems = (props) => {

    const { value } = props;
    const { original_title, release_date, title, poster_path,overview} = value;
    const objectNames = {
        orginalTitle: original_title,
        releaseDate: release_date,
        title: title,
        posterPath:poster_path,
        overview:overview

    }

    return (

        <>

            <div className="container">
                <div>
                    <p>{objectNames.orginalTitle}</p>
                    <p>{objectNames.releaseDate}</p>
                    <p>{objectNames.title}</p>
                    <p>{objectNames.overview}</p>
                </div>
                <img className='image' src= {`https://image.tmdb.org/t/p/w500${objectNames.posterPath}`}/>

            </div>
        </>
    )


}
export default CardItems