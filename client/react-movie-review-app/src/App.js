import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig.js';
import {useState, useEffect} from 'react';
import Layout from './components/layout.js';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js';
import Header from './components/header/header.js';


function App() {

  const [movies, setMovies] = useState();

  const getMovies = async ()=>{

    try{
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    }
    catch(err){
      console.log('err',err);
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
         <Route path="/" element={<Home movies={movies}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
