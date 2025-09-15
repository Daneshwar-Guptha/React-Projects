// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import MovieSearch from './component/MovieSearch/MovieSearch'
import Home from './component/Home/Home'
// import Trending from './component/Trending/Trending'
// import Popular from './component/Popular/Popular'
// import TvList from './component/TvList/TvList'
// import Navbar from './component/Navbar/Navbar'
// import Footer from './component/Footer/Footer'
// import Practice from './component/Prcatice/Practice'
import { Routes, Route } from "react-router-dom";
import MovieItem from './component/MovieItem/MovieItem';


function App() {

  return (
    <>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieItem />} />
      </Routes>


    </>
  )
}

export default App
