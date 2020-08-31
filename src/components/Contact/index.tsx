import React, { useState, useEffect, useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import pc from '../../assets/pc.svg';

import './styles.css';

const Contact = () => {

  const [offset, setOffset] = useState(0);
  const refsContext = useContext(RefsContext);

  useEffect(() => {
    function handleScrollC() {
      if(window.pageYOffset > 170)
        setOffset((window.pageYOffset - 170) * .4);
    }

    window.addEventListener('scroll', handleScrollC);

    return () => {
      window.removeEventListener('scroll', handleScrollC);
    }
  }, [offset]);

  return (
    <section className="contSec">
      <div className="skewc" style={{ backgroundPositionY: offset }}></div>
      <div className="contact" ref={refsContext.contactRef as RefObject<HTMLDivElement>}>
        <div className="inner">
          <h2>Contact (soon)</h2>
          <svg style={{ fill: '#45a29e', height: '70px', marginTop: '15px' }}><use xlinkHref={`#icon-build`}></use></svg>
        </div>
      </div>
      <img src={pc} className="pc" alt="desktop" />
    </section>
  )
}

export default Contact;