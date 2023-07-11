import React, { useEffect, useState } from "react";
import Card from './Card';
import './Movies.css'
import { getAllMovies } from '../api-helpers/api-helpers';

const Movies = () => {
  const [mov, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);
   const movies= [
      {
        id: 1,
        title: 'Knights of the Zodiac',
        genre: 'Action',
        image: 'https://www.kotzmovie.com/images/share.jpg',
        description: 'When a headstrong street orphan unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess who was sent to watch over humanity.',
        rating: 4.5,
      },
      {
        id: 4,
        title: 'Vikram',
        genre: 'Action',
        image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6237/1296237-h-5662015305e4',
        description: 'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.',
        rating: 4.9,
      },
      {
      id: 2,
      title: 'Minions',
      genre: 'Comedy',
      image: 'https://images.hindustantimes.com/img/2022/08/23/1600x900/Film-Review---Minions--The-Rise-of-Gru-4_1656604921410_1661263121026_1661263121026.jpg',
      description: 'Minions Kevin, Stuart and Bob decide to find a new master. They embark on a global trip and meet Scarlett Overkill, a female super-villain who recruits them and hatches a plan to take over the world.',
      rating: 3.8,
    },
    {
        id: 5,
        title: 'Phir Hera Pheri',
        genre: 'Comedy',
        image: 'https://assets.gqindia.com/photos/63f5e8075cd4fca7346cb938/16:9/pass/Hera-Phera-3_001.jpg',
        description: 'A twist of fate changes the lives of Raju, Shyam and Baburao when they get cheated by a fraudster. They must now find another way to repay the loan taken from a dreaded gangster.',
        rating: 4.8,
      },
    {
      id: 3,
      title: 'Movie 3',
      genre: 'Drama',
      image: 'movie3.jpg',
      description: 'This is Movie 3',
      rating: 4.2,
    },
    {
      id: 6,
      title: 'Movie 3',
      genre: 'Drama',
      image: 'movie3.jpg',
      description: 'This is Movie 3',
      rating: 4.2,
    },
    // Add more movies with their details as needed
  ];

  // Get unique genres from the movies
  // movies.append(mov);
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className='MoviesSp'>
      <h1>Welcome to Our Website</h1>
      <h3>Find and book your favourite movies</h3>
      {genres.map((genre) => (
        <section key={genre}>
          <h2>{genre}</h2>
          <div className="movie-list">
            {movies
              .filter((movie) => movie.genre === genre)
              .map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  image={movie.image}
                  description={movie.description}
                  rating={movie.rating}
                />
              ))}
              {mov &&
          mov.map((movie, index) => (
            <Card
              key={movie._id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              posterUrl={movie.posterUrl}
              description={movie.description}
             
            />
          ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Movies;
 
    // <h1 style={{ fontSize: '29px', marginBottom: '8px' }}></h1>
    // <p style={{ fontSize: '20px' }}>Find and book your favorite movies</p>
    // <div></div>
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>