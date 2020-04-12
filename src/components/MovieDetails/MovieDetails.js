import React, { Component } from 'react';
import './MovieDetails.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReview } from '../../actions'
import { undoRating } from '../../actions'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      movie: this.props.movies.find(movie => movie.id === this.props.id),
      error: '',
      successMsg: '',
      removedMsg: '',
      currentRating: null
    }
  }

  componentDidMount() {
    console.log(this.props.id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/movies/${this.props.id}`)
      .then(res => res.json())
      .then(data => this.setState({movie: data.movie}))
      .catch(err => console.error(err.message))
  }
  rateMovie(index) {
    const currentReview = this.props.reviews.find(review => review.movie_id === this.props.id);
    if (this.props.user && !currentReview) {
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
          fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings`)
            .then(res => res.json())
            .then(data => {
              this.props.addReview(data.ratings.find(rating => rating.movie_id === this.state.movie.id))
            })
          this.setState({successMsg: `Your rating of ${data.rating.rating} stars has been successfully submitted`})
          setTimeout(() => {
            this.setState({
              successMsg: ''
            });
          }, 2000);
        })
        .catch(err => this.setState({error: err.message}))
    } else if(this.props.user) {
      this.setState({error: 'Please undo your rating below to submit a new one.'});
      setTimeout(() => {
        this.setState({
          error: ''
        });
      }, 2000);
    } else {
      this.setState({error: 'You must be logged in to review a movie'});
      setTimeout(() => {
        this.setState({
          error: ''
        });
      }, 2000);
    }
  }
  undoRating() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        currentRating: data.ratings.find(rating => rating.movie_id === this.state.movie.id)
      }, () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings/${this.state.currentRating.id}`, {
        method: 'DELETE',
      })
      .then(res => console.log(res))
      .catch(err => console.error(err.message))
      })
    this.props.undoRating(this.state.currentRating)
      this.setState({
        currentRating: null
      })
    })
    .catch(err => console.error(err.message))
  }
  render() {
    // might want to break out the movie destructuring so that we can use jest to mock it
    const { movie } = this.state;
    const currentReview = this.props.reviews.find(review => review.movie_id === this.props.id);
    let stars;
    const createStars = (rating, color) => {
      const numStars = Math.ceil(rating);
      const filledStars = Array(numStars).fill(`/images/star-${color}.svg`);
      const emptyStars = Array(10 - numStars).fill("/images/star-clear-outline.svg");
      stars = filledStars.concat(emptyStars).map((star, index) => {
        return (
          <img key={index} onClick={() => this.rateMovie(index)} className = "star" src ={`${star}`} alt = {`${color} star`} />
        )
      })
    }
    if (movie && currentReview) {
      createStars(currentReview.rating, 'yellow')
    } else if (movie) {
      createStars(this.state.movie.average_rating, 'green')
    }

    if(movie) {
      const backgroundImage = {
        backgroundImage: `url(${movie.backdrop_path})`
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
            <button onClick={() => this.undoRating()}>undo rating</button>
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
    } else {
      return (<section>loading...</section>)
    }    
  }
}

const mapStateToProps = state => ({
  movies: state.moviesList,
  user: state.loginFlow.user,
  reviews: state.loadReviews
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(addReview(review)),
  undoRating: review => dispatch(undoRating(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)