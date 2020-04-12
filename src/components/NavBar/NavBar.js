import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { logOut, clearReviews, changePage } from '../../actions';
import { connect } from 'react-redux';


const NavBar = (props) => {
    let navDiv;
    if (props.page === 'login') {
        navDiv = ''
    } else if (props.user) {
        navDiv = (<div className="nav-login-div">
                    <h4 className="user-name">
                        Welcome, {props.user.name}
                    </h4>
                    <NavLink
                        to="/"
                        className="nav-login-link">
                        <button
                        data-testid="logout-btn"
                        className="nav-login-button"
                        onClick={() => {
                            props.logOut()
                            props.clearReviews()
                            props.changePage('movies')
                        }}>
                            Logout
                        </button>
                    </NavLink>
                </div>)
        } else {
            navDiv = (<div className="nav-login-div">
                <h4 className="user-name">
                    Welcome! Please Login
                </h4>
                <NavLink
                    to="/login"
                    className="nav-login-link">
                    <button
                        className="nav-login-button"
                        onClick={() => props.changePage('login')}>
                        Login
                    </button>
                </NavLink>
            </div>)
        }

        return (
            <section className="nav-bar">
                <div className="header-icon-container">
                    <h1 className="site-heading">Rancid Tomatillos</h1>
                    <img
                        alt="tomato logo"
                        className="icon"
                        src= "/rancid-tomatillos-app/images/tomato.svg"
                    />
                </div>
                {navDiv}
            </section>
        )
}

const mapStateToProps = state => ({
  user: state.loginFlow.user,
  page: state.updatePage
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  clearReviews: () => dispatch(clearReviews()),
  changePage: page => dispatch(changePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);