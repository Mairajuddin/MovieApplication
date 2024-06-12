// import React, { useEffect, useState } from "react";
// import { GetMovieByGenre } from "../Utils/useRequest";
// import MovieCard from "./MovieCard";

// const MovieList = ({ genereID }) => {
//   const [movieList, setMovieList] = useState([]);
//   const getMovieByGenreId = async () => {
//     try {
//       const data = await GetMovieByGenre(genereID);
//       console.log(data.results, "data");
//       setMovieList(data.results || []);
//     } catch (err) {
//       console.log(err.message || "An error occurred");
//     }
//   };
//   useEffect(() => {
//     getMovieByGenreId();
//   }, []);
//   return (
//     <div className="flex overflow-x-auto gap-6 scrollbar-hide pt-5 px-3 pb-10">
//       {movieList.map((item, index) => (
//         <MovieCard movie={item} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;

import React, { useContext, useEffect, useState } from "react";
import { GetMovieByGenre } from "../Utils/useRequest";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loadingContext from "../context/Context";

const MovieList = ({ data }) => {
  // const [movieList, setMovieList] = useState([]);
  // const { setLoading, getMovieByGenreId, movieGenreList } =
  // useContext(loadingContext);

  // useEffect(() => {
  //   if (movieGenreList.length > 0) return setMovieList(movieGenreList);
  // }, [movieGenreList]);

  // const getMovieByGenreId = async () => {
  //   try {
  //     const data = await GetMovieByGenre(genereID);
  //     console.log(data.results, "data-cccccc");
  //     setMovieList(data.results || []);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err.message || "An error occurred");
  //   }
  // };

  // useEffect(() => {
  //   getMovieByGenreId();
  // }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true, // Enable autoplay
          autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative  ">
      <Slider {...settings}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="px-1">
              <MovieCard movie={item} />
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </Slider>
    </div>
  );
};

export default MovieList;
