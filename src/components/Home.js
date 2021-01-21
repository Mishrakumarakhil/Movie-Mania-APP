import React,{useContext}from "react";
import { AppContext } from "../context";
import Loading from "./Loading";
import Movies from "./Movies";
import Error from "./Error";
import Paginate from "./Paginate";



const Home = React.memo(() => {
  const { movies, isLoading,num_pages_results,handlePageChange,page } = useContext(AppContext);
 
  if (isLoading) {
    return <Loading />;
  }
  if (!movies) {
    return <Error />;
  }
  return (
    <div >
    <div className="Home">
      {movies.slice(0,8).map((movie) => {
        return <Movies key={movie.imdbID} movie={movie} />;
      })}
      
     
    </div>

    {num_pages_results.totalResults > 0 ? (
                <Paginate
                   // present_results={num_pages_results.present_results}
                    totalResults={num_pages_results.totalResults}
                    page={page}
                    handleChange={handlePageChange}
                />
            ) : null}

    </div>
  );
});

export default Home;
