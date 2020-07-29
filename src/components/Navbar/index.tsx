import React, { useState } from 'react';
import './styles.css';

import NavButton from '../NavButton';
import SocialButton from '../SocialButton';
import Logo from '../Logo';

const Navbar = () => {
    const toggle = (both) => {
        const navlinks = document.querySelector(".nav-links");
        const sociallinks = document.querySelector(".social-links");

        if(navlinks && sociallinks){
            if(both){
                navlinks.classList.toggle("active");
                sociallinks.classList.toggle("active");
                return;
            }
            if(navlinks.classList.contains("active"))
                navlinks.classList.toggle("active");
            if(sociallinks.classList.contains("active"))
                sociallinks.classList.toggle("active");
            return;
        }
        return;
    };
    
    return (
        <div className="sidebar">

            <Logo toggle={toggle}/>

            <ul className="nav-links">
                <li>
                    <NavButton icon="fas fa-home" text="Home" toggle={toggle} />
                </li>
                <li>
                    <NavButton icon="far fa-user" text="Resume" toggle={toggle}/>
                </li>
                <li>
                    <NavButton icon="fas fa-cube" text="Projects" toggle={toggle}/>
                </li>
                <li>
                    <NavButton icon="far fa-comment-alt" text="Contact" toggle={toggle}/>
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