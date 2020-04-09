import React from 'react';
import './MovieCard.css';
import { NavLink } from 'react-router-dom';

const MovieCard = (props) => {
  const numStars = Math.ceil(props.averageRating);
  const filledStars = Array(numStars).fill("images/star-green.svg");
  const emptyStars = Array(10 - numStars).fill("/images/star-clear-outline.svg");
  const stars = filledStars.concat(emptyStars).map((star, index) => {
    return (
      <img key={index} className = "star" src ={`${star}`} alt = "star" />
    )
  })
  
  return (
    <section className="movie-card">
      <img
        alt="movie poster"
        className="movie-poster"
        src={props.posterImage}
        />
      <h3>{props.title}</h3>
      <p>Avg. Rating: {props.averageRating.toFixed(1)}</p>
      <section className="rate-movie">
        {stars}
      </section>
      <NavLink to={`/movies/${props.id}`}>
        <button className="movie-details-btn">View Movie Details</button>
      </NavLink>
    </section>
  )
}

export default MovieCard