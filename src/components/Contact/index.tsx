import React, { useState, useEffect, useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';
import { FormattedMessage } from 'react-intl';

import pc from '../../assets/pc.svg';

import styles from './styles.module.css';

const Contact = () => {

  const [offset, setOffset] = useState(0);
  const refsContext = useContext(RefsContext);

  useEffect(() => {
    function handleScrollC() {
      setOffset((document.body.scrollHeight - window.innerHeight - window.pageYOffset) * -.4);
    }

    window.addEventListener('scroll', handleScrollC);

    return () => {
      window.removeEventListener('scroll', handleScrollC);
    }
  }, [offset]);

  return (
    <section className={styles.contSec}>
      <div className={styles.skewc} style={{ backgroundPositionY: offset }}></div>
      <div className={styles.contact} ref={refsContext.contactRef as RefObject<HTMLDivElement>}>
        <div className={styles.inner}>
          <h2><FormattedMessage id="soon"/></h2>
          <svg style={{ fill: '#45a29e', height: '70px', marginTop: '15px' }}><use xlinkHref={`#icon-build`}></use></svg>
        </div>
      </div>
      <img src={pc} className={styles.pc} alt="desktop" />
    </section>
  )
}

export default Contact;