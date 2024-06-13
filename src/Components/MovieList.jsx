import React, { useContext, useEffect, useState } from "react";
import { GetMovieByGenre } from "../Utils/useRequest";
import { MovieCard } from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loadingContext from "../context/Context";

const MovieList = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 9000, // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true, // Enable autoplay
          autoplaySpeed: 9000, // Set autoplay speed (in milliseconds)
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
