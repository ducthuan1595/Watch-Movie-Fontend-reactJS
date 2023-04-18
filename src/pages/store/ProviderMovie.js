import React, { useState, createContext, useEffect } from "react";
import { API_KEY, url } from "./API";

export const Context = createContext();

const ProviderDetail = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [video, setVideo] = useState({});
  // const [search, setSearch] = useState("");

  const getMovieDetail = (movie) => {
    setMovieDetail(movie);
  };

  useEffect(() => {
    const fetchApi = async () => {
      if (Object.keys(movieDetail).length !== 0) {
        console.log('id', movieDetail.id)
        const res = await fetch(
          `${url}/video/${movieDetail.id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log('ok',data);
        if (data.errCode === 1) {
          setVideo(null);
        }else {
          setVideo(data);
        }
      }
    };

    fetchApi();
  }, [movieDetail]);

  return (
    <Context.Provider
      value={{ showDetail, setShowDetail, movieDetail, video, getMovieDetail }}
    >
      {children}
    </Context.Provider>
  );
};
export default ProviderDetail;
