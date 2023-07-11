import React from "react";
import "./Home.css";
// import { Link } from 'react-router-dom';
import backImg from "./images/wp10021077.webp";
const HomePage = () => {
  return (
    <div>
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
            <img src={backImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome</h1>
              <p>Find and book your favourite movies</p>
              <a href="/movies"><button className="book-button">Book Now</button></a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={backImg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h1>Welcome</h1>
              <p>Find and book your favouritemovies</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={backImg} className="d-block w-100" alt="..." />
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
    </div>
  );
};

export default HomePage;
