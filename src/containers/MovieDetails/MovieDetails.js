import React, { Component } from 'react';
import './MovieDetails.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReview } from '../../actions'
import { undoRating } from '../../actions'
import { fetchSpecificMovie, postRating, fetchRatings } from '../../apicalls'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movies.find(movie => movie.id === this.props.id),
      error: '',
      successMsg: '',
      removedMsg: '',
      currentRating: null,
      disabled: !this.props.reviews.find(review => review.movie_id === this.props.id)
    }
  }

  componentDidMount() {
    fetchSpecificMovie(this.props.id)
      .then(data => data ? this.setState({movie: data.movie}) : '')
      .catch(err => console.error(err.message))
  }

  rateMovie(index) {
    const currentReview = this.props.reviews.find(review => review.movie_id === this.props.id);
    if (this.props.user && !currentReview) {
      const rating = index + 1;
      postRating(rating, this.props.user.id, this.props.id)
        .then(data => {
          fetchRatings(this.props)
            .then(data => {
              this.props.addReview(data.ratings.find(rating => rating.movie_id === this.state.movie.id))
            })
          this.setState({ 
            successMsg: `Your rating of ${data.rating.rating} stars has been successfully submitted`,
            disabled: false
        })
          setTimeout(() => {
            this.setState({
              successMsg: '',
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
    fetchRatings(this.props)
    .then(data => {
      this.setState({
        currentRating: data.ratings.find(rating => rating.movie_id === this.state.movie.id)
      }, () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings/${this.state.currentRating.id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .catch(err => console.error(err.message))
      })
    this.props.undoRating(this.state.currentRating)
      this.setState({
        currentRating: null,
        disabled: true,
        removedMsg: 'This rating has been removed'
      })
      setTimeout(() => {
        this.setState({
          removedMsg: ''
        })
      }, 2000)
    })
    .catch(err => console.error(err.message))
  }

  render() {
    const ratingType = () => {
      if (!this.state.disabled) {
        return 'Your Rating:'
      } else {
        return 'Avg. Rating:'
      }
    }
    const { movie } = this.state;
    const currentReview = this.props.reviews.find(review => review.movie_id === this.props.id);
    let stars;
    const createStars = (rating, color) => {
      const numStars = Math.ceil(rating);
      const filledStars = Array(numStars).fill(`/rancid-tomatillos-app/images/star-${color}.svg`);
      const emptyStars = Array(10 - numStars).fill("/rancid-tomatillos-app/images/star-clear-outline.svg");
      stars = filledStars.concat(emptyStars).map((star, index) => {
        return (
          <img key={index} onClick={() => this.rateMovie(index)} data-testid={`star-${index}`} className = "star" src ={`${star}`} alt = {`${color} star`} />
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
      {ratingType()}{stars}
            </div>
            {this.state.error && <p>{this.state.error}</p>}
            {this.state.successMsg && <p>{this.state.successMsg}</p>}
            {this.state.removedMsg && <p>{this.state.removedMsg}</p>}
            <button disabled={this.state.disabled} onClick={() => this.undoRating()}>undo rating</button>
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