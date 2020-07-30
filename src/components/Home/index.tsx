import React from 'react';
import './styles.css';

const Home = (props:any) => {
    
    const parallax = () => {
        const offset = window.pageYOffset;
        /*const el = document.querySelector(".home-content");
        if(el)
            (el as HTMLElement).style.backgroundPositionY = offset * 0.5 + "px";
        */
        if(props.contentRef.current)
            props.contentRef.current.style.backgroundPositionY = offset * 0.5 + "px";
    };

    window.addEventListener("scroll", parallax);
    
    return (
        <section>
            <div className="home-content" ref={props.contentRef}>
                <div className="inner">
                    <h1>Home</h1>
                    <p> 
                        bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla
                        blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla
                        bla blabla bla blabla bla blabla bla blabla
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;