import React, { useEffect, useState } from "react";
import loadingContext from "./Context";
import { FireApi, GetMovieByGenre } from "../Utils/useRequest";
import GenersList from "../Constants/GenersList";
const ContextProvider = ({ children }) => {
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [trendingList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovieByGenreId = async () => {
    Promise.all(
      GenersList.map(async (item) => {
        const result = await GetMovieByGenre(item.id);
        return {
          id: item.id,
          name: item.name,
          data: result.results,
        };
      })
    )
      .then((res) => setMovieGenreList(res))
      .catch((err) => console.log(err));
  };
  const getTrendingMovies = async () => {
    try {
      const data = await FireApi();
      console.log(data, "data");
      setMovieList(data.results || []);
    } catch (err) {
      console.log(err.message || "An error occurred");
    }
  };

  useEffect(() => {
    Promise.all([getMovieByGenreId(), getTrendingMovies()]).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <loadingContext.Provider
      value={{
        loading,
        setLoading,
        movieGenreList,
        trendingList,
      }}
    >
      {children}
    </loadingContext.Provider>
  );
};

export default ContextProvider;
