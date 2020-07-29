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

            <Logo icon="subject" toggle={toggle}/>

            <ul className="nav-links">
                <li>
                    <NavButton icon="home" text="Home" toggle={toggle} />
                </li>
                <li>
                    <NavButton icon="assignment_ind" text="Resume" toggle={toggle}/>
                </li>
                <li>
                    <NavButton icon="code" text="Projects" toggle={toggle}/>
                </li>
                <li>
                    <NavButton icon="forum" text="Contact" toggle={toggle}/>
                </li>
            </ul>
            <ul className="social-links">
                <li>
                    <SocialButton icon="github" href="https://github.com/ricsonl" />
                </li>
                <li>
                    <SocialButton icon="linkedin" href="https://www.linkedin.com/in/ricson-vila%C3%A7a-8a394a190/" />
                </li>
                <li>
                    <SocialButton icon="instagram" href="https://www.instagram.com/ricsonluiz/" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar;