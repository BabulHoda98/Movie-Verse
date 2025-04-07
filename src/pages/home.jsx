import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovies } from "../features/moviesSlice";

import MovieList from "../components/movieList";

const Home = () => {
  const dispatch = useDispatch();
  const { trending, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-2xl font-bold text-blue-900">Trending Movies</h1>
      {status === "loading" ? (
        <div className="py-10 text-ceneter">
          <p className="text-xl font-semibold tex-gray-800">Loading...</p>
        </div>
      ) : (
        <div className="py-10">
          <MovieList movies={trending} />
        </div>
      )}
    </div>
  );
};

export default Home;
