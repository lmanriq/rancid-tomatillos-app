import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <section className='nav-bar'>
            <h1 className='site-heading'>Rancid Tomatillos</h1>
            <img  
            alt="icon-image"
            className="icon" 
            src="https://www.flaticon.com/authors/freepik"
            />
            <div className='nav-loggin-div'>
                <h4 className='user-name'>Welcome, Jim Jones</h4>
                <button className='nav-loggin-button'>
                <p>login</p>
                </button>
            </div>
        </section>

    )
}


export default NavBar;