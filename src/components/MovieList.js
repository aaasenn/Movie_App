import React, {useContext} from "react";
import {SearchContext} from '../App';


const MovieList = () => {
  const {movies} = useContext(SearchContext);
  console.log(movies)
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div key={index} className="d-flex justify-content-start m-3">
            <img src={movie.Poster} alt='movie'></img>
          </div>
        )
      })}
    </>
  )
}

export default MovieList;