// import React from "react";
// import bl from ".bootstrap-logo.svg";
import './Navbar.css';
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [value, setValue] = useState();
  const [movies, setMovies] = useState([]);
  return (

    <nav className="navbar">
      <div className="logo">
        <h1><a>Movie Booking</a></h1>
      </div>
      <ul className="nav-links">
        <li>
        <Link to="/"> <a href="/home">Home</a></Link>
        </li>
        <li>
        <Link to="/movies">Movies</Link>
        </li>
        {/* <li>
          <a href="/theaters">Theaters</a>
        </li> */}
        <li>
        <Link to="/bookings"> <a href="/bookings">Bookings</a></Link>
        </li>
        {!isUserLoggedIn && (
        <li>
        <Link to="/login"> <a href="/Login">Login</a></Link>
        </li>
        )}
        {isUserLoggedIn && (
        <li>
        <Link to="/login"> <a href="/Login">Log Out</a></Link>
        </li>
        )}
      </ul>
    </nav>
  )

}

export default Navbar;
