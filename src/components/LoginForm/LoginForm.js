import React, { Component } from "react";
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <section class="login-container">
        <form>
          <h2>Login</h2>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button class="login-button">Login</button>
        </form>
      </section>
    )
  }
}

export default LoginForm