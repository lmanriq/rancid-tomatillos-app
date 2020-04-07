import React, { Component } from 'react';
import './MovieDetails.css';

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
        <button type="button">Back to Browse</button>
      </section>
    )
  }
}

export default MovieDetails;