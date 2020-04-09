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
      currentUserReview: null,
      error: '',
      successMsg: ''
    }
  }

  rateMovie(index) {
    if (this.props.user) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id: this.props.id, rating: index })
      })
        .then(res => res.json())
        .then(data => )
        .catch(err => this.setState({error: err.message}))
    } else {
      this.setState({error: 'You must be logged in to review a movie'});
      setTimeout(() => {
        this.setState({
          error: ''
        });
      }, 2000);
    }
  }

  render() {
    // might want to break out the movie destructuring so that we can use jest to mock it
    const { movie } = this.state;
    const backgroundImage = {
      backgroundImage: `url(${movie.backdrop_path})`
    }
    const numStars = Math.ceil(this.state.movie.average_rating);
    const filledStars = Array(numStars).fill("/images/star-green.svg");
    const emptyStars = Array(10 - numStars).fill("/images/star-clear-outline.svg");
    const stars = filledStars.concat(emptyStars).map((star, index) => {
      return (
        <img key={index} onClick={() => this.rateMovie(index)} className = "star" src ={`${star}`} alt = "star" />
      )
    })

    return (
      <section className = "details-section" style = {backgroundImage}>
        <div className = "title-container">
          <h1>{movie.title}</h1>
          <div className = "stars-box">
            {stars}
          </div>
          {this.state.error && <p>{this.state.error}</p>}
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
  movies: state.moviesList,
  user: state.loginFlow.user
});

export default connect(mapStateToProps, null)(MovieDetails)