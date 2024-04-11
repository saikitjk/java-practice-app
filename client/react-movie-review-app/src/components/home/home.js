import React from 'react';
import Hero from '../hero/hero.js'

const Home = ({movies})=>{
  return(
    <div>
      <Hero movies = {movies} />
    </div>
  )

}

export default Home;