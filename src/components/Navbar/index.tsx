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

    const goTo = (url) => {
        document.location.href = url;
        toggleNav(false);
    };

    const newTab = (url) => {
        var win = window.open(url, '_blank');
        if(win){ win.focus(); }
    };

    return (
        <div className="sidebar">
            <div className="logo">Ric</div>
            <ul className="nav-links">
                <li>
                    <button>
                        <div>
                            <i className="fas fa-home"></i>
                            <p>Home</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button>
                        <div>
                            <i className="far fa-user"></i>
                            <p>Resume</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button>
                        <div>
                            <i className="fas fa-cube"></i>
                            <p>Projects</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button>
                        <div>
                            <i className="far fa-comment-alt"></i>
                            <p>Contact</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
            </ul>
            <ul className="social-links">
                <li>
                    <button onClick={() => newTab('https://github.com/ricsonl')}>
                        <i className="fab fa-github"></i>
                    </button>
                </li>
                <li>
                    <button onClick={() => newTab('https://www.linkedin.com/in/ricson-vila%C3%A7a-8a394a190/')}>
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                </li>
                <li>
                    <button onClick={() => newTab('https://www.hackerrank.com/ricsonl')}>
                        <i className="fab fa-hackerrank"></i>
                    </button>
                </li>
            </ul>
            <div className="more" onClick={() => toggleNav(true)} >
                <i className="fas fa-arrow-left"></i>
            </div>
        </div>
    )
}

export default Navbar;