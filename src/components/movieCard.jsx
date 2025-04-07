import React from "react";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  const { id, title, overviesw, poster_path, release_date } = movie;
  // console.log(poster_path);

  return (
    <article className="border border-gray-200 rounded-lg shadow-xl shadow-gray-100 p-2 hover:shadow-gray-300 transition-shadow">
      <div>
        <img
          src={`https://www.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="rounded"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-blue-900 font-medium tracking-wide"><Link to={`movies/${id}`}>{title}</Link></h3>
        <p className="text-sm">{release_date}</p>
      </div>
    </article>
  );
};

export default MovieCard;
