import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import SliderComp from "./Components/SliderComp";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <SliderComp />
      <ProductionHouse />
      <GenreMovieList />
      <Footer />
    </>
  );
};

export default Layout;
