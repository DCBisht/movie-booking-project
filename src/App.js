// import React "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
// import Contacts from "./components/Contacts";
// import Bookings from "./components/Bookings";
import MyBooking from "./components/Bookings";
import Login from "./components/Login";
import { adminActions, userActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, [dispatch]);
  return (
    <div>
    
    <Navbar/> 

    
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Home" element={ <HomePage/> } />
      <Route path="Movies" element={ <Movies/> } />
      <Route path="Bookings" element={<MyBooking/> } />
      <Route path="Login" element={ <Login/> } />
      
      </Routes>


    {/* <HomePage/>  */}


   
    </div>
  );
}

export default App;
