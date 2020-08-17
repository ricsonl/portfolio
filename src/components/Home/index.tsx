import React, { useEffect, useState, useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import './styles.css';

const Home = () => {

    const [ offset, setOffset ] = useState(0);
    const [ letterSpacing, setLetterSpacing ] = useState(3);

    const refsContext = useContext(RefsContext);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);

            const f = (window.screen.width > 450) ? .04 : .02;
            setLetterSpacing(3 + offset*f);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [ offset ]);
    
    return (
        <section>
            <div className="skew" style={{ backgroundPositionY: offset*.5 }}></div>
            <div className="home-content" ref={refsContext.homeRef as RefObject<HTMLDivElement>}>
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