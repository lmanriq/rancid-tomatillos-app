import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {

console.log(props)

const stars = Array(10).fill(<img className = "star" src = "Images/star-clear-outline.svg" alt = "empty star" />);
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