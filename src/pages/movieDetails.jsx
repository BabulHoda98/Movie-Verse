import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmJlMTQ4NDhiMzY5YWRmYmNlYWVmNThhMTQ2ZmZhZSIsIm5iZiI6MTcwMDU0NDY0Ni4xNjUsInN1YiI6IjY1NWM0MDg2NTM4NjZlMDBlMjk2MDgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HabRE2yCkgbe8Gcf2xHKL8Vw1-obQJgJ24l1QZDwfE";

const MovieDetails = () => {
  const{id}=useParams();
  const [movie,setMovie]=useState(null);

  useEffect(()=>{
    async function fetchMovieDetails(){
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}`,
        {
          headers:{
            Authorization:`Bearer ${API_KEY}`,
          },
        }
      );
      setMovie(data);
    }
    fetchMovieDetails();
    },[id]);

    if(!movie)
  return (
    <div className='py=10 text-center'>
      <p className='text-xl font-semibold text-gray-800'>Loading...</p>
    </div>
  );
  console.log(movie);
  const{backdrop_path,budget,genres,imdb_id,original_title,overview}=movie;
  
  return <div>MoiveDetails</div>;
}

export default MovieDetails;