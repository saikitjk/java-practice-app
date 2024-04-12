import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig.js';
import {useState, useEffect} from 'react';
import Layout from './components/layout.js';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js';
import Header from './components/header/header.js';
import Trailer from './components/trailer/trailer.js';
import Reviews from './components/reviews/reviews.js';


function App() {

  const [movies, setMovies] = useState();
  const [movie, setSingleMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async ()=>{

    try{
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    }
    catch(err){
      console.log('err',err);
    }

  }

  const getMovieData = async (movieId)=>{
    try{
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data
      setSingleMovie(singleMovie);
      setReviews(response.review);
    }
    catch (error){

    }
  }

  // getMovies will run when the app first loads
  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/" element={<Home movies={movies}/>}></Route>
         <Route path="/Trailer/:ytTrailerId" element={<Trailer />} ></Route>
         <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
