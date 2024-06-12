import React from "react";

const ProductionHouse = () => {
  const productionList = [
    {
      id: 1,
      image: "./disney.png",
      video: "./videos/disney.mp4",
    },
    {
      id: 2,
      image: "./pixar.png",
      video: "./videos/pixar.mp4",
    },
    {
      id: 3,
      image: "./marvel.png",
      video: "./videos/marvel.mp4",
    },
    {
      id: 4,
      image: "./starwar.png",
      video: "./videos/star-wars.mp4",
    },
    {
      id: 5,
      image: "./nationalG.png",
      video: "./videos/national-geographic.mp4",
    },
  ];

  return (
    <div className="flex  flex-wrap  gap-2 md:gap-5 flex-nowrap p-2 px-5 md:px-16 mt-2">
      {productionList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all
         duration-300 ease-in-out  relative shadow-xl  shadow-gray-800 "
        >
          <img src={item.image} alt="production" className="w-full z-[1]" />
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
