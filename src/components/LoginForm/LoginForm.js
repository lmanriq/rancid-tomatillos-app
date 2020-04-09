import React, { Component } from "react";
import './LoginForm.css';
import { connect } from 'react-redux';
import { loginUser, loadReviews, changePage } from '../../actions';
import { NavLink } from 'react-router-dom';
import { postUser, fetchUser } from '../../apicalls'

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
    postUser(this.state)
      .then(data => {
        // console.log('line 25', data)
        this.props.loginUser(data)
        loginUser(data)
          // .then(data => console.log('line 28', data))
          .then(userFaves => this.props.loadReviews(userFaves.ratings))
          .catch(err => console.error(err.message))
      })
     .catch(err => console.error(err.message))
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
            onClick={e => {
              this.submitLogin(e)
              this.props.changePage('movies')
            }}
            type="button"
            className="login-container">
               <NavLink
                className="login-link"
                to="/">
                <button className="login-button" type="button">Login</button>
              </NavLink>
          </div>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  loadReviews: reviews => dispatch(loadReviews(reviews)),
  changePage: page => dispatch(changePage(page))
})

export default connect(null, mapDispatchToProps)(LoginForm)