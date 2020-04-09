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

//     {id: 1, title: "Bloodshot", poster_path: "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg", release_date: "2020-03-05", …}
// id: 1
// title: "Bloodshot"
// poster_path: "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
// backdrop_path: "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg"
// release_date: "2020-03-05"
// overview: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought."
// average_rating: 5
    const { movie } = this.state;
    console.log(movie)
    const backgroundImage = {
      backgroundImage: `url(${movie.backdrop_path})`
    }

    const numStars = Math.ceil(movie.average_rating);
    const filledStars = Array(numStars).fill(<img className = "star" src = "/images/star-green.svg" alt = "green star" />);
    const emptyStars = Array(10 - numStars).fill(<img className = "star" src = "/images/star-clear-outline.svg" alt = "empty star" />);
    const stars = filledStars.concat(emptyStars)

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