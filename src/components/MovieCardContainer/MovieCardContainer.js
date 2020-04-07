import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardContainer.css';
import { loadMovies } from '../../actions';
import { connect } from 'react-redux';

class MovieCardContainer extends Component {
  // const movieCards = 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props.loadMovies) 
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      // .then(data => console.log(data.movies))
      .then(movieList => this.props.loadMovies(movieList.movies))
      .catch(err => console.error(err.message))
  }
  
  render() {
    return (
      <section className="movie-card-container">
        <MovieCard />
      </section>
    )}
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  loadMovies: movies => dispatch(loadMovies(movies))
});

export default connect(null, mapDispatchToProps)(MovieCardContainer)