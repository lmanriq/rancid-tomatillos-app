import React, { Component } from 'react'
import './LoginPage.css'
import LoginForm from '../../containers/LoginForm/LoginForm'
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieOfDay: this.props.movies[Math.floor(Math.random() * this.props.movies.length)]
    }
  }
  render() {
    const moviePoster = () => {
      if (this.state.movieOfDay) {
        return this.state.movieOfDay.poster_path
      } else {
        return 'https://image.tmdb.org/t/p/original//AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg'
      }
    }
    return(
      <section className="login-page">
        <LoginForm className="login-form"/>
        <div className="login-image-container">
          <h2>Movie Of The Day</h2>
          <img className="login-img" src={moviePoster()} alt="movie-poster" />
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.moviesList
})
export default connect(mapStateToProps, null)(LoginPage)
