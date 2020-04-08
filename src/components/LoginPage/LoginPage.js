import React from 'react'
import './LoginPage.css'
import LoginForm from '../LoginForm/LoginForm'

const LoginPage = () => {
  return(
    <section className="login-page">
      <LoginForm />
      <div className="login-image-container">
        <img className="login-img" src="https://image.tmdb.org/t/p/original//AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg" alt="movie-poster" />
      </div>
    </section>
  )
}

export default LoginPage