import React, { useEffect, useState, useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import notebook from '../../assets/notebook.svg';

import './styles.css';

const Home = () => {

  const [offset, setOffset] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(3);

  const refsContext = useContext(RefsContext);

  useEffect(() => {
    function handleScrollH() {
      setOffset(window.pageYOffset * .4);

      const f = (window.screen.width > 450) ? .04 : .02;
      setLetterSpacing(3 + offset * f);
    }

    window.addEventListener('scroll', handleScrollH);

    return () => {
      window.removeEventListener('scroll', handleScrollH);
    }
  }, [offset]);

  return (
    <section>
      <img src={notebook} className="notebook" alt="notebook" />
      <div className="skew" style={{ backgroundPositionY: offset }}></div>
      <div className="home-content" ref={refsContext.homeRef as RefObject<HTMLDivElement>}>
        <div className="inner">
          <h1 className="spacing" style={{ letterSpacing: letterSpacing }}>
            Ricson Vilaça
          </h1>
          <p className="home-sub spacing" style={{ letterSpacing: letterSpacing }}>software developer</p>
          <div className="home-more">

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;