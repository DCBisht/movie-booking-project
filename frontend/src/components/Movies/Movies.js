// import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers";
import MovieItem from "./MovieItem";
import './Movie.css';
const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='MoviesSp'>
    <h1>Welcome to Our Website</h1>
    <h3>Find and book your favourite movies</h3>
    
        <div className="movie-list">
          {movies && movies.map((movie,index) => (
              <MovieItem
                key={index}  
                id={movie._id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                // rating={movie.rating}
              />
            ))}
      </div>
      
    </div>
  );
};

export default Movies;
