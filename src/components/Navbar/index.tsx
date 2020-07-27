import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        const navlinks = document.querySelector('.nav-links');
        setNav(!nav);
        if (navlinks) {
            navlinks.classList.toggle('nav-active');
        }
    };

    return (
        <nav>
            <div className="logo">
                <h4>ricson</h4>
            </div>
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
                            <i className="fas fa-id-card-alt"></i>
                            <p>Resume</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button>
                        <div>
                            <i className="fas fa-th"></i>
                            <p>Projects</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
                <li>
                    <button>
                        <div>
                            <i className="fas fa-comment-alt"></i>
                            <p>Contact</p>
                        </div>
                    </button>
                    <div className="border"></div>
                </li>
            </ul>
            <div className="more" onClick={() => toggleNav()} >
                <i className="fas fa-arrow-left"></i>
            </div>
            <div className="cover" onClick={() => toggleNav()}></div>
        </nav>
    )
}

export default Navbar;