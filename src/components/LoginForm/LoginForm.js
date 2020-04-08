import React, { Component } from "react";
import './LoginForm.css';
import { connect } from 'react-redux';
import { loginUser } from '../../actions'
// {email: <String>, password: <String>}

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submitLogin(e) {
    e.preventDefault();
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.err(err.message))
  }

  render() {
        return(
      <section className="login-container">
        <form>
          <h2>Login</h2>
          <input
            onChange={(e) => this.handleChange(e)}
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}/>
          <input
            onChange={(e) => this.handleChange(e)}
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}/>
          <button onClick={e => this.submitLogin(e)} type="button" className="login-button">Login</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
})

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)