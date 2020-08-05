import React from 'react';
import './styles.css';

import NavButton from '../NavButton';
import SocialButton from '../SocialButton';
import Logo from '../Logo';

const Navbar = (props:any) => {
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

            <Logo /*logo="svg-logo"*/ moreIcon="svg-subject" toggle={toggle}/>

            <ul className="nav-links">
                <li>
                    <NavButton icon="svg-home" text="Home" contentRef={props.contentRefs.homeRef} toggle={toggle} />
                </li>
                <li>
                    <NavButton icon="svg-assignment_ind" text="Resume" contentRef={props.contentRefs.resumeRef} toggle={toggle}/>
                </li>
                <li>
                    <NavButton icon="svg-code" text="Projects" contentRef={props.contentRefs.projectsRef} toggle={toggle}/>
                </li>
                <li>
                    <NavButton icon="svg-forum" text="Contact" contentRef={props.contentRefs.contactRef} toggle={toggle}/>
                </li>
            </ul>
            <ul className="social-links">
                <li>
                    <SocialButton icon="svg-github" href="https://github.com/ricsonl" />
                </li>
                <li>
                    <SocialButton icon="svg-linkedin" href="https://www.linkedin.com/in/ricson-vila%C3%A7a-8a394a190/" />
                </li>
                <li>
                    <SocialButton icon="svg-instagram" href="https://www.instagram.com/ricsonluiz/" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar;