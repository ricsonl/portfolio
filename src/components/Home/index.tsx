import React from 'react';
import './styles.css';

const Home = (props:any) => {

    const homeEffects = () => {
        const offset = window.pageYOffset;
        const skw = document.querySelector(".skew");
        if(skw){
            (skw as HTMLElement).style.backgroundPositionY = offset * .6 + "px";
        }
        if(offset < window.innerHeight){
            const spacing = document.getElementsByClassName("spacing");
            for (let i = 0; i < spacing.length; i++) {
                (spacing[i] as HTMLElement).style.letterSpacing = 3 + offset * .05 + "px";
            }
        }
    };

    window.addEventListener("scroll", homeEffects);
    
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