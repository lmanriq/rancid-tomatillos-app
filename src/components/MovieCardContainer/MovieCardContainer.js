import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardContainer.css';
import { loadMovies } from '../../actions';
import { connect } from 'react-redux';
import { fetchForMovies } from '../../apicalls'

class MovieCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetchForMovies()
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
          id={movie.id}
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
      <div>
        <h2>Recent Releases</h2>
          <section data-testid="card-container" className="movie-card-container">
            {movieCards}
          </section>
      </div>
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