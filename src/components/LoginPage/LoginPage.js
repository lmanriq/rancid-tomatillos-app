import React from 'react'
import './LoginPage.css'
import LoginForm from '../LoginForm/LoginForm'

const LoginPage = () => {
  return(
    <section class="login-page">
      <LoginForm />
      <div class="login-image-container">
        <img class="login-img" src="https://image.tmdb.org/t/p/original//AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg" alt="movie-poster" />
      </div>
    </section>
  )
}

export default LoginPage