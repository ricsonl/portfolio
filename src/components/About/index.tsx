import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';
import List from '../List';
import ListItem from '../ListItem';


import pp from '../../assets/pp1.png';

import styles from './styles.module.css';

const About = () => {

  const refsContext = useContext(RefsContext);

  return (
    <section>
      <div className={styles.about} ref={refsContext.aboutRef as RefObject<HTMLDivElement>}>
        <div className={styles.aboutContainer}>

          <section className={styles.aboutCard}>
            <img src={pp} className={styles.pp} alt="profile picture" />
            <div>
              <List title="Basic Info">
                <ListItem icon="svg-location" mainText="Belo Horizonte - MG" secText="Brazil"/>
                <ListItem icon="svg-school" mainText="Computer Science - UFV" secText="2017 - 2022"/>
                <ListItem icon="svg-earth" mainText="Portuguese" secText="Native"/>
                <ListItem icon="" mainText="English" secText="Advanced"/>
              </List>
            </div>

            <div>
              <List title="Current main interests">
                <ListItem icon="svg-code" mainText="Web" secText="Full Stack" />
                <ListItem icon="svg-code" mainText="Mobile" secText="Full Stack" />
                <ListItem icon="svg-code" mainText="Machine Learning" />
                <ListItem icon="svg-code" mainText="??????????????" />
                <ListItem icon="svg-code" mainText="??????????????" />
              </List>
            </div>
          </section>

          <hr />

          <section className={styles.aboutCard}>
            <p>
              asadasd
              asdasd
            </p>
          </section>

          <hr />

          <section className={styles.aboutCard}>
            <h2></h2>
          </section>

        </div>
      </div>
    </section>
  )
}

export default About;