import Footer from "../Footer/Footer"
import MovieSearch from "../MovieSearch/MovieSearch"
import Navbar from "../Navbar/Navbar"
import Popular from "../Popular/Popular"
import Practice from "../Prcatice/Practice"
import Trending from "../Trending/Trending"
import TvList from "../TvList/TvList"

const Home = () => {

    return (
        <>
         <Navbar />
              <Trending />
              <Popular />
              <TvList />
              <MovieSearch />
              <Footer />
              <Practice />
        </>
    )
}
export default Home