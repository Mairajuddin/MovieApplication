import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import MovieDescriptionModal from "./Modals/MovieDescriptionModal";

const CardUtils = ({ setOpenModal, openModal }) => {
  const [favourite, setFavourite] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="absolute z-1 flex flex-col bg-white gap-4 right-0 top-5  p-2 rounded-lg shadow-lg">
        <CiHeart
          onClick={() => setFavourite(!favourite)}
          style={{ display: favourite ? "none" : "block" }}
          className="text-red-500  text-[40px] cursor-pointer fill-red-500"
        />
        <FaHeart
          onClick={() => setFavourite(!favourite)}
          style={{ display: favourite ? "block" : "none" }}
          className="text-red-500 text-[40px] cursor-pointer"
        />

        <FaRegEye
          onClick={handleModalOpen}
          className="text-[40px] cursor-pointer"
        />
      </div>
    </>
  );
};
export const MovieCard = ({ movie }) => {
  const [hoverCard, setHoverCard] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-full md:w-[300px]   rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:border-[3px] border-gray-400
     
        "
      />

      {hoverCard && (
        <CardUtils setOpenModal={setOpenModal} openModal={openModal} />
      )}
      <MovieDescriptionModal
        movie={movie}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

// export default MovieCard;
