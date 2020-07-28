import React, { useState } from 'react';
import './styles.css';

import NavButton from '../NavButton';
import SocialButton from '../SocialButton';
import Logo from '../Logo';

const Navbar = () => {
    const toggle = () => {
        const navlinks = document.querySelector(".nav-links");
        const sociallinks = document.querySelector(".social-links");
        if (navlinks) {
            navlinks.classList.toggle("active");
        }
        if (sociallinks) {
            sociallinks.classList.toggle("active");
        }
        return;
    };
    
    return (
        <div className="sidebar">

            <Logo moreAction={toggle}/>

            <ul className="nav-links">
                <li>
                    <NavButton icon="fas fa-home" text="Home" action={toggle} />
                </li>
                <li>
                    <NavButton icon="far fa-user" text="Resume" action={toggle}/>
                </li>
                <li>
                    <NavButton icon="fas fa-cube" text="Projects" action={toggle}/>
                </li>
                <li>
                    <NavButton icon="far fa-comment-alt" text="Contact" action={toggle}/>
                </li>
            </ul>
            <ul className="social-links">
                <li>
                    <SocialButton icon="fab fa-github" href="https://github.com/ricsonl" />
                </li>
                <li>
                    <SocialButton icon="fab fa-linkedin" href="https://www.linkedin.com/in/ricson-vila%C3%A7a-8a394a190/" />
                </li>
                <li>
                    <SocialButton icon="fab fa-hackerrank" href="https://www.hackerrank.com/ricsonl" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar;