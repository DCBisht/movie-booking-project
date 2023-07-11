import React from 'react';
import './Card.css';

const Card = ({ title, image, description, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <button className="book-now-button">Book Now</button>
    </div>
  );
};

export default Card;
