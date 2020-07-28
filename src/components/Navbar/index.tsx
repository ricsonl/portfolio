import React, { useState } from 'react';
import './styles.css';

import NavButton from '../NavButton';
import SocialButton from '../SocialButton';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = (arrow) => {
        const navlinks = document.querySelector('.nav-links');
        setNav(!nav);
        if (navlinks) {
            if(!arrow){
                if (navlinks.classList.contains('nav-active'))
                    navlinks.classList.toggle('nav-active');
            } else { navlinks.classList.toggle('nav-active'); }
        }
    };

    const goTo = (url) => {
        document.location.href = url;
        toggleNav(false);
    };

    return ( /*far fa-user, fas fa-cube, far fa-comment*/
        <div className="sidebar">
            <div className="logo">Ric</div>
            <ul className="nav-links">
                <li>
                    <NavButton icon="fas fa-home" text="Home" />
                </li>
                <li>
                    <NavButton icon="far fa-user" text="Resume" />
                </li>
                <li>
                    <NavButton icon="fas fa-cube" text="Projects" />
                </li>
                <li>
                    <NavButton icon="far fa-comment" text="Contact" />
                </li>
            </ul>
            <ul className="social-links">
                <li>
                    <SocialButton icon="fab fa-github" href="https://github.com/ricsonl" />
                </li>
                <li>
                    <SocialButton icon="fab fa-linkedin-in" href="https://www.linkedin.com/in/ricson-vila%C3%A7a-8a394a190/" />
                </li>
                <li>
                    <SocialButton icon="fab fa-hackerrank" href="https://www.hackerrank.com/ricsonl" />
                </li>
            </ul>
            <div className="more" onClick={() => toggleNav(true)} >
                <i className="fas fa-arrow-left"></i>
            </div>
        </div>
    )
}

export default Navbar;