import React from 'react';
import './styles.css';

const Home = (props:any) => {
    
    const parallax = () => {
        const offset = window.pageYOffset;

        if(props.contentRef.current)
            props.contentRef.current.style.backgroundPositionY = offset * 0.5 + "px";
    };

    window.addEventListener("scroll", parallax);
    
    return (
        <section id="home">
            <div className="home-content" ref={props.contentRef}>
                <h1>Home</h1>
                <p> bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla 
                    blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla
                    bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla
                    bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla 
                    blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla
                    bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla
                </p>
            </div>
        </section>
    );
}

export default Home;