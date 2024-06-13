import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },

    {
      name: "Trending",
      icon: HiStar,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "My List",
      icon: HiPlus,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];
  return (
    <div className="w-full z-10 text-white flex items-center  justify-between gap-10 p-5">
      <div className="flex  gap-10 items-center">
        <div className="hidden md:flex gap-8  items-center ">
          <img
            src="./logo.png"
            className="w-[58px]  lg:w-[120px] h-[4  9px] object-cover"
            alt="logo"
          />
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          <img
            src="./logo.png"
            className="w-[58px] h-[39px] lg:w-[120px] object-cover"
            alt="logo"
          />
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
        </div>
        <div
          className="md:hidden items-center"
          onClick={() => setToggle(!toggle)}
        >
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div
              onMouseLeave={() => setToggle(false)}
              className="absolute  mt-2 bg-[#0c94cd] border-[1px] border-gray-700 p-3 px-5 py-4  rounded text-white"
            >
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                    />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="./avatar.png"
        className="w-[40px] rounded-full"
        onClick={() => navigate("/login")}
      />
    </div>
  );
};

export default Header;
