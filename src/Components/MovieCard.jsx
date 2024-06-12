import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-full md:w-[300px]   rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:border-[3px] border-gray-400
     
        "
      />
    </>
  );
};

export default MovieCard;
