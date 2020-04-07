import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <section className="nav-bar">
            <h1 className="site-heading">Rancid Tomatillos</h1>
            <img
                alt="tomato logo"
                className="icon"
                src="/images/tomato.svg"
            />
            <div className="nav-login-div">
                <h4 className="user-name">Welcome! Please Login</h4>
                <NavLink to="/login" className="nav-login-button">Login</NavLink>
            </div>
        </section>

    )
}


export default NavBar;