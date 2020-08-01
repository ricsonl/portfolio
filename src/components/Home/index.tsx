import React from 'react';
import './styles.css';

const Home = (props:any) => {

    const parallax = () => {
        const offset = window.pageYOffset;
        if(props.contentRef.current)
            props.contentRef.current.style.backgroundPositionY = offset * 0.5 + "px";
        if(offset < window.innerHeight){
            const spacing = document.getElementsByClassName("spacing");
            for (let i = 0; i < spacing.length; i++) {
                (spacing[i] as HTMLElement).style.letterSpacing = 3 + offset * .05 + "px";
            }
        }
    };

    window.addEventListener("scroll", parallax);
    
    return (
        <section>
            <div className="skew"></div>
            <div className="home-content" ref={props.contentRef}>
                <div className="inner">
                    <h1 className="spacing">Ricson Vilaça</h1>
                    <p className="home-tag spacing">&nbsp;&lt;/&gt;</p>
                    <p className="home-sub spacing">software developer</p>
                </div>
            </div>
        </section>
    );
}

export default Home;