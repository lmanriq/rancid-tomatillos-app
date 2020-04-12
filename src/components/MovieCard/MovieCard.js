import React from 'react';
import './MovieCard.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieCard = (props) => {
  const currentReview = props.reviews.find(review => review.movie_id === props.id);
  let averageStars;
  let userStars
  const createAverageStars = (rating, color) => {
    const numStars = Math.ceil(rating);
    const filledStars = Array(numStars).fill(`/rancid-tomatillos-app/images/star-${color}.svg`);
    const emptyStars = Array(10 - numStars).fill("/rancid-tomatillos-app/images/star-clear-outline.svg");
    averageStars = filledStars.concat(emptyStars).map((star, index) => {
      return (
        <img key={index} className = "star" src ={`${star}`} alt = {`${color} star`} />
      )
    })
  }

  const createUserStars = (rating, color) => {
    const numStars = Math.ceil(rating);
    const filledStars = Array(numStars).fill(`/rancid-tomatillos-app/images/star-${color}.svg`);
    const emptyStars = Array(10 - numStars).fill("/rancid-tomatillos-app/images/star-clear-outline.svg");
    userStars = filledStars.concat(emptyStars).map((star, index) => {
      return (
        <img key={index} className = "star" src ={`${star}`} alt = {`${color} star`} />
      )
    })
  }
  
  if (currentReview) {
    createUserStars(currentReview.rating, 'yellow')
    createAverageStars(props.averageRating, 'green')
  } else {
    createAverageStars(props.averageRating, 'green')
  }

  return (
    <section className="movie-card">
      <img
        alt="movie poster"
        className="movie-poster"
        src={props.posterImage}
      />
      <h3>{props.title}</h3>
        {currentReview ? <section className="rate-movie">
                            <p>Avg. Rating: {averageStars}</p>
                            <p>Your Rating: {userStars}</p>
                          </section> :
                          <section className="rate-movie">
                            <p>Avg. Rating: {averageStars}</p>
                          </section>}
      <NavLink to={`/movies/${props.id}`}>
        <button
        data-testid={props.id}
        className="movie-details-btn">View Movie Details</button>
      </NavLink>
    </section>
  )
}

const mapStateToProps = state => ({
  reviews: state.loadReviews
});

export default connect(mapStateToProps, null)(MovieCard);