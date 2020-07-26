import React, { useState } from 'react';
import './styles.css';

import avatar from '../../assets/pp.png';

const Navbar = () => {

    const [nav, setNav] = useState(false); 

    const toggleNav = () => {
        const navlinks = document.querySelector('.nav-links');
        setNav(!nav);
        if(navlinks){
            navlinks.classList.toggle('nav-active');
        }
    };

    return (
        <nav>
            <div className="logo">
                <h4>Ric</h4>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <a className="more" onClick={() => toggleNav()} >
                <i className="fas fa-bars"></i>
            </a>
        </nav>
    )
}

export default Navbar;