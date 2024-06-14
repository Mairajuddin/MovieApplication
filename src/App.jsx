import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SliderComp from "./Components/SliderComp";
import "./App.css";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import { useContext, useEffect } from "react";
import loadingContext from "./context/Context";
import Footer from "./Components/Footer";
import Layout from "./Layout";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Utils/PrivateRoute";

function App() {
  const { loading } = useContext(loadingContext);
  const token = localStorage.getItem("token");
  console.log(token, "token");
  useEffect(() => {
    console.log(loading, "loading");
  }, [loading]);

  return (
    <div className="w-full min-h-screen  ">
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Align items vertically
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // Center vertically
          }}
        >
          <img
            src="Animation - 1718192122635.gif"
            alt="Loading..."
            style={{
              width: "200px", // Adjust the width of the GIF
              marginBottom: "20px", // Add some space between the GIF and the text
            }}
          />
          <h1 className="text-white font-bold font-[200px]">Loading...</h1>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Layout />} />
            </Route>
          </Routes>
        </BrowserRouter>
        // <Layout />
      )}
    </div>
  );
}

export default App;
