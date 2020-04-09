import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
const numStars = Math.ceil(props.averageRating);
const filledStars = Array(numStars).fill(<img className = "star" src = "/images/star-green.svg" alt = "green star" />);
const emptyStars = Array(10 - numStars).fill(<img className = "star" src = "/images/star-clear-outline.svg" alt = "empty star" />);
const stars = filledStars.concat(emptyStars)

    //  key={movie.id}
    //       title={movie.title}
    //       posterImage={movie.poster_path}
    //       backdropImage={movie.backdrop_path}
    //       releaseDate={movie.release_date}
    //       overview={movie.overview}
    //       averageRating={movie.average_rating}
  return (
  <section className="movie-card">
    <img 
      alt="movie poster"
      className="movie-poster" 
      src={props.posterImage} 
      />
    <h3>{props.title}</h3>
    <p>Avg. Rating: {props.averageRating}</p>
    <section className="rate-movie">
      {stars}
    </section>
    <button className="movie-details-btn">View Movie Details</button>
  </section>
  )
}

export default MovieCard