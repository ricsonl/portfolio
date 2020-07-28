import React from 'react';
import './styles.css';

const Logo = () => {
    const toggleNav = () => {
        const navlinks = document.querySelector(".nav-links");
        const sociallinks = document.querySelector(".social-links");
        if(navlinks){
            navlinks.classList.toggle("active");
        }
        if(sociallinks){
            sociallinks.classList.toggle("active");
        }
    };
    return (
        <div className="logo">
            <i className="more fas fa-bars" onClick={() => toggleNav()}></i>
            <img height="25" src="https://media.scoutwiki.org/images/c/ce/SVG-logo.svg" alt="g" />
        </div>
    )
}

export default Logo;