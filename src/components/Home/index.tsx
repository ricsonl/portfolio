import React, { useEffect, useState } from 'react';
import './styles.css';

const Home = (props:any) => {

    const [ offset, setOffset ] = useState(0);
    const [ letterSpacing, setLetterSpacing ] = useState(3);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);

            const f = (window.screen.width > 450) ? .04 : .02;
            setLetterSpacing(3 + offset*f);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [ offset ]);
    
    return (
        <section>
            <div className="skew" style={{ backgroundPositionY: offset*.5 }}></div>
            <div className="home-content" ref={props.contentRef}>
                <div className="inner">
                    <h1 className="spacing" style={{ letterSpacing: letterSpacing }}>Ricson Vilaça</h1>
                    <p className="home-tag spacing" style={{ letterSpacing: letterSpacing }}>&nbsp;&lt;/&gt;</p>
                    <p className="home-sub spacing" style={{ letterSpacing: letterSpacing }}>software developer</p>
                    <div className="home-more">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;