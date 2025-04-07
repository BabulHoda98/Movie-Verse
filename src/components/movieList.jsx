import React from 'react'

const MovieList = ({movies}) => {
  console.log(movies);
  
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
      {movies.map((movie)=>{
        <MovieCard key={movie.id} movies={movie}/>
      })}
    </div>
  );
};

export default MovieList