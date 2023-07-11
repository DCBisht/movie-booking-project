// import React from 'react';
import './Bookings.css';
import React, {  useEffect, useState } from "react";
import { getMovieDetails, newBooking } from "../api-helpers/api-helpers";
import { useParams } from "react-router-dom";
const MyBooking = () => {
  
  
  const bookings = [
    {
      id: 1,
      movie: 'The Shawshank Redemption',
      name:'Akash',
      date: '2023-06-01',
      time: '18:00',
      status: 'Previous',
      image: 'https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg',
      seatNo: 'B6',
    },
    {
      id: 2,
      movie: 'The Shawshank Redemption',
      date: '2023-06-15',
      name:'Deepak',
      time: '20:30',
      status: 'Previous',
      image: 'https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg',
      seatNo: 'B6',
    },
    {
      id: 3,
      movie: 'The Fault in Our Stars',
      date: '2023-07-05',
      name:'Neha',
      time: '16:15',
      status: 'Upcoming',
      image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/333/1770000333/1770000333-h',
      seatNo: 'B6',
      LocationM: '1, Newfangled Miniplex: Mondeal Retail Park'
    },
    // Add more bookings as needed
  ];
  
  const previousBookings = bookings.filter((booking) => booking.status === 'Previous');
  const upcomingBookings = bookings.filter((booking) => booking.status === 'Upcoming');

  return (
    <div className='MyBooking'>
      <h1>My Bookings</h1>
      <h2>Previous Bookings</h2>
      {previousBookings.length > 0 ? (
        <ul>
          {previousBookings.map((booking) => (
            <li key={booking.id}>
              <h3>{booking.movie}</h3>
             
              <img src={booking.image} alt={booking.movie} />
              <p>Name of the Ticket Holder: {booking.name}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              {/* <p>Seat Number : {booking.seatNo}</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No previous bookings found.</p>
      )}

      <h2>Upcoming Bookings</h2>
      {upcomingBookings.length > 0 ? (
        <ul>
          {upcomingBookings.map((booking) => (
            <li key={booking.id}>
              <h3>{booking.movie}</h3>
              
              <img src={booking.image} alt={booking.movie} />
              <p>Name of the Ticket Holder: {booking.name}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Location: {booking.LocationM}</p>
              <p>Seat Number : {booking.seatNo}</p>
             
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming bookings found.</p>
      )}
    </div>
  );
};

export default MyBooking;
