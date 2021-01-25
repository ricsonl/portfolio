import React, { useContext } from 'react';
import styles from './styles.module.css';

import NavButton from '../NavButton';
import SocialButton from '../SocialButton';
import Logo from '../Logo';

import RefsContext from '../../context/RefsContext';

const Navbar = () => {

    const refsContext = useContext(RefsContext);

    const handleClick = (ref) => {
      if(ref.current)
        ref.current.scrollIntoView({ behavior: 'smooth' });
      toggle(false);
    };

    const toggle = (both) => {
        const navlinks = document.querySelector(`.${styles.navLinks}`);
        const sociallinks = document.querySelector(`.${styles.socialLinks}`);

        if(navlinks && sociallinks){
            if(both){
                navlinks.classList.toggle(styles.active);
                sociallinks.classList.toggle(styles.active);
                return;
            }
            if(navlinks.classList.contains(styles.active))
                navlinks.classList.toggle(styles.active);
            if(sociallinks.classList.contains(styles.active))
                sociallinks.classList.toggle(styles.active);
            return;
        }
        return;
    };

    return (
        <div className={styles.sidebar}>

            <Logo /*logo="svg-logo"*/ moreIcon="svg-subject" toggle={toggle}/>

            <ul className={styles.navLinks}>
                <li>
                    <NavButton onClick={() => handleClick(refsContext.homeRef)} icon="svg-home" text="Home" toggle={toggle} />
                </li>
                <li>
                    <NavButton onClick={() => handleClick(refsContext.aboutRef)} icon="svg-assignment_ind" text="About" toggle={toggle}/>
                </li>
                <li>
                    <NavButton onClick={() => handleClick(refsContext.projectsRef)} icon="svg-code" text="Projects" toggle={toggle}/>
                </li>
                <li>
                    <NavButton onClick={() => handleClick(refsContext.contactRef)} icon="svg-forum" text="Contact" toggle={toggle}/>
                </li>
            </ul>
            <ul className={styles.socialLinks}>
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