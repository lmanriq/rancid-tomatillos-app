import React, { Component } from "react";
import './LoginForm.css';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { loadReviews } from '../../actions'
import { NavLink } from 'react-router-dom';

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
    .then(data => {
      this.props.loginUser(data)
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${data.user.id}/ratings`)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(userFaves => this.props.loadReviews(userFaves.ratings))
        .catch(err => console.error(err.message))
    })
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
         <div
            onClick={e => this.submitLogin(e)}
            type="button"
            className="login-button">
               <NavLink
                className="login-button"
                to="/">
                Login
              </NavLink>
          </div>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  loadReviews: reviews => dispatch(loadReviews(reviews))
})

// const mapStateToProps = state => ({
//   user: state.loginFlow.user //This is the global state path, user obj keys = id, name, email
// })

export default connect(null, mapDispatchToProps)(LoginForm)