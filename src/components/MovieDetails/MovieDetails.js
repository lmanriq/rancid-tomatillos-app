import React, { Component } from 'react';
import './MovieDetails.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      movie: this.props.movies.find(movie => movie.id === this.props.id),
      currentUserReview: null
    }
  }

  render() {
    const { movie } = this.state;
    console.log(movie)
    const backgroundImage = {
      backgroundImage: `url(${movie.backdrop_path})`
    }
    const numStars = Math.ceil(props.averageRating);
    const filledStars = Array(numStars).fill("images/star-green.svg");
    const emptyStars = Array(10 - numStars).fill("/images/star-clear-outline.svg");
    const stars = filledStars.concat(emptyStars).map((star, index) => {
      return (
        <img key={index} className = "star" src ={`${star}`} alt = "star" />
      )
    })

    return (
      <section className = "details-section" style = {backgroundImage}>
        <div className = "title-container">
          <h1>{movie.title}</h1>
          <div className = "stars-box">
            {stars}
          </div>
          <button>undo rating</button>
        </div>
        <article className = "movie-details">
          <h3>Released: {movie.release_date}</h3>
          <p>{movie.overview}</p>
        </article>
        <NavLink to="/">
          <button type="button">Back to Browse</button>
        </NavLink>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.moviesList
});

export default connect(mapStateToProps, null)(MovieDetails)