import React, { Component } from 'react';
import './MovieDetails.css';
import { NavLink } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const backgroundImage = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original//fYPiQewg7ogbzro2XcCTACSB2KC.jpg)`
    }

    const stars = Array(10).fill(<img className = "star" src = "Images/star-clear-outline.svg" alt = "empty star" />);

    // const numStars = Math.ceil(this.props.averageRating);
    // const filledStars = Array(numStars).fill(<img className = "star" src = "/images/star-green.svg" alt = "green star" />);
    // const emptyStars = Array(10 - numStars).fill(<img className = "star" src = "/images/star-clear-outline.svg" alt = "empty star" />);
    // const stars = filledStars.concat(emptyStars)

    return (
      <section className = "details-section" style = {backgroundImage}>
        <div className = "title-container">
          <h1>Underwater</h1>
          <div className = "stars-box">
            {stars}
          </div>
          <button>undo rating</button>
        </div>
        <article className = "movie-details">
          <h3>Released: 2020-01-08</h3>
          <p>After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.</p>
        </article>
        <NavLink to="/">
          <button type="button">Back to Browse</button>
        </NavLink>
      </section>
    )
  }
}

export default MovieDetails;