import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const API_ENDPOINT = "http://www.omdbapi.com/?&apikey=8566110e&";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchMovie, setSearchMovie] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [num_pages_results, setNumPagesAndResults] = useState({
    totalResults: 0,
    
  });


  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}s=${searchMovie}&page=${page}`);

        const pagesObj = { ...num_pages_results }
        
        pagesObj.totalResults = response.data.totalResults
       

        setNumPagesAndResults(pagesObj)
        setMovies(response.data.Search);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [searchMovie,page,num_pages_results]);

  const handlePageChange = async (event, value) => {
      setPage(value);
      try {
        const response = await axios.get(`${API_ENDPOINT}s=${searchMovie}&page=${page}`);

        const pagesObj = { ...num_pages_results }
        
        pagesObj.totalResults = response.data.totalResults
        pagesObj.present_results = response.data.Search.length

        setNumPagesAndResults(pagesObj)
        setMovies(response.data.Search);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
  }

 
  return (
    <AppContext.Provider value={{ movies, setSearchMovie, isLoading, num_pages_results,handlePageChange,page }}>
      {children}
    </AppContext.Provider>
  );
};
