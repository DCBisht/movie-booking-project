import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";
import "./HomePage.css"; // Import the CSS file
// import '../Movies/Movie.css';
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container"> 
    {/* Use the "container" class */}
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://wallpapercave.com/wp/wp10021077.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome</h1>
              <p>Find and book your favourite movies</p>
              <a href="/movies"><button className="book-button">Book Now</button></a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://wallpapercave.com/wp/wp10021077.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h1>Welcome</h1>
              <p>Find and book your favouritemovies</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wallpapercave.com/wp/wp10021077.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h1>Welcome </h1>
              <p>Find and book your favourite movies</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     
      <div className="title"> {/* Use the "title" class */}
        <h1>Book Movies You Like!!</h1>
      </div>
      <div className="movie-list"> {/* Use the "movieContainer" class */}
        {movies &&
          movies.slice(0, 6).map((movie, index) => (
            <MovieItem
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
      </div>
      <div className="viewAllButton"> {/* Use the "viewAllButton" class */}
        
      <Link to="/movies">
        <button
          className="MuiButtonBase-root MuiButton-root MuiButton-outlined"
          component={Link}
          
        >
          View All Movies
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
