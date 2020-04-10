import React, { Component } from 'react';
import './MovieDetails.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReview } from '../../actions'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      movie: this.props.movies.find(movie => movie.id === this.props.id),
      currentUserReview: this.props.reviews.find(review => review.moive_id === this.props.id),
      error: '',
      successMsg: ''
    }
  }

  rateMovie(index) {
    if (this.props.user) {
      const rating = index + 1;
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id: this.props.id, rating: rating })
      })
        .then(res => res.json())
        .then(data => {
          this.props.addReview(data.rating)
          this.setState({successMsg: `Your rating of ${data.rating.rating} stars has been successfully submitted`})
          setTimeout(() => {
            this.setState({
              successMsg: ''
            });
          }, 2000);
        })
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


    const currentReview = this.props.reviews.find(review => review.movie_id === this.props.id);
    let stars;
    const createStars = (rating, color) => {
      const numStars = Math.ceil(rating);
      const filledStars = Array(numStars).fill(`/images/star-${color}.svg`);
      const emptyStars = Array(10 - numStars).fill("/images/star-clear-outline.svg");
      stars = filledStars.concat(emptyStars).map((star, index) => {
        return (
          <img key={index} onClick={() => this.rateMovie(index)}className = "star" src ={`${star}`} alt = {`${color} star`} />
        )
      })
    }
    if (currentReview) {
      createStars(currentReview.rating, 'yellow')
    } else {
      createStars(this.state.movie.average_rating, 'green')
    }
    return (
      <section className = "details-section" style = {backgroundImage}>
        <div className = "title-container">
          <h1>{movie.title}</h1>
          <div className = "stars-box">
            {stars}
          </div>
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.successMsg && <p>{this.state.successMsg}</p>}
          <button disabled={!currentReview}>undo rating</button>
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
  user: state.loginFlow.user,
  reviews: state.loadReviews
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(addReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)