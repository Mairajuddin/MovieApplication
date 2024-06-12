import React, { useContext, useEffect, useRef, useState } from "react";
import { FireApi } from "../Utils/useRequest";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import LoadingContext from "../context/Context";

const SliderComp = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const elementRef = useRef(null);
  const screenWidth = window.innerWidth;
  const { trendingList } = useContext(LoadingContext);

  // const getTrendingMovies = async () => {
  //   try {
  //     const data = await FireApi();
  //     console.log(data.results, "data");
  //     setMovieList(data.results || []);
  //   } catch (err) {
  //     console.log(err.message || "An error occurred");
  //   }
  // };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative w-full">
      <HiChevronLeft
        style={{
          backgroundColor: "#14143c",
          border: "2px solid grey",
          boxShadow: "0px 0px 10px 10px rgba(128, 128, 128, 0.7)", // Gray shadow
        }}
        className="hidden md:block text-white text-[30px]  absolute top-1/2 left-4 transform -translate-y-1/2   cursor-pointer z-10 rounded-full h-[60px] w-[60px] p-3"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        style={{
          backgroundColor: "#14143c",
          border: "2px solid grey",
          boxShadow: "0px 0px 10px 10px rgba(128, 128, 128, 0.7)", // Gray shadow
        }}
        className="hidden md:block text-white text-[30px] absolute top-1/2 right-4 transform -translate-y-1/2  cursor-pointer z-10 rounded-full h-[60px] w-[60px] p-3"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full scrollbar-hide scroll-smooth snap-x snap-mandatory"
        ref={elementRef}
      >
        {trendingList.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-full h-[310px] flex justify-center items-center"
          >
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              style={{ objectFit: "cover", objectPosition: "left top" }}
              className="w-full h-full object-cover rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
              alt={item.title || item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderComp;
