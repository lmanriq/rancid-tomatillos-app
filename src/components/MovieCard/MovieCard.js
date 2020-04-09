import React from 'react';
import './MovieCard.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieCard = (props) => {
  const currentReview = props.reviews.find(review => review.movie_id === props.id);
  let stars;
  const createStars = (rating, color) => {
    const numStars = Math.ceil(rating);
    const filledStars = Array(numStars).fill(`/images/star-${color}.svg`);
    const emptyStars = Array(10 - numStars).fill("/images/star-clear-outline.svg");
    stars = filledStars.concat(emptyStars).map((star, index) => {
      return (
        <img key={index} className = "star" src ={`${star}`} alt = {`${color} star`} />
      )
    })
  }
  
  if (currentReview) {
    createStars(currentReview.rating, 'yellow')
  } else {
    createStars(props.averageRating, 'green')
  }
  
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

const mapStateToProps = state => ({
  reviews: state.loadReviews
});

export default connect(mapStateToProps, null)(MovieCard);