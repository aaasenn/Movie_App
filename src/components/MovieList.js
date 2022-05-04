import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="d-flex justify-content-start m-3">
            <img src={movie.Poster} alt='movie'></img>
            <div className="row align-items-end">
            <button className="btn btn-primary">+</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MovieList;