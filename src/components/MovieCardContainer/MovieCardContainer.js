import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardContainer.css';
import { loadMovies } from '../../actions';
import { connect } from 'react-redux';

class MovieCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(movieList => {
        this.props.loadMovies(movieList.movies)
      })
      .catch(err => console.error(err.message))
  }

  render() {
    const movieCards = this.props.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterImage={movie.poster_path}
          backdropImage={movie.backdrop_path}
          releaseDate={movie.release_date}
          overview={movie.overview}
          averageRating={movie.average_rating}
        />
      )
    })
      return (
        <section className="movie-card-container">
          {movieCards}
        </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.moviesList
});

const mapDispatchToProps = dispatch => ({
  loadMovies: movies => dispatch(loadMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardContainer)