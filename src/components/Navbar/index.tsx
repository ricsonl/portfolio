import React, { useState } from 'react';
import './styles.css';

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

    return (
        <nav>
            <div className="logo">
                <h4>ricson</h4>
            </div>
            <ul className="nav-links">
                <li>
                    <button onClick={() => toggleNav(false)}>
                        <div>
                            <i className="fas fa-home"></i>
                            <p>Home</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button onClick={() => toggleNav(false)}>
                        <div>
                            <i className="far fa-user"></i>
                            <p>Resume</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button onClick={() => toggleNav(false)}>
                        <div>
                            <i className="fas fa-cube"></i>
                            <p>Projects</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button onClick={() => toggleNav(false)}>
                        <div>
                            <i className="far fa-comment-alt"></i>
                            <p>Contact</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <ul className="social-links">
                        <li>
                            <button onClick={() => { document.location.href ='https://github.com/ricsonl';}}>
                                <i className="fab fa-github"></i>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { document.location.href = 'https://www.linkedin.com/in/ricson-vila%C3%A7a-8a394a190/'; }}>
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { document.location.href = 'https://www.hackerrank.com/ricsonl'; }}>
                                <i className="fab fa-hackerrank"></i>
                            </button>
                        </li>
                    </ul>
                </li>
                
            </ul>

            <div className="more" onClick={() => toggleNav(true)} >
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className="cover" onClick={() => toggleNav(false)}></div>
        </nav>
    )
}

export default Navbar;