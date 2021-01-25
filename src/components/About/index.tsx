import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';
import Fieldset from '../Fieldset';
import ListItem from '../ListItem';
import TechGrid from '../TechGrid';

import pp from '../../assets/pp1.png';

import styles from './styles.module.css';

const About = () => {

  const refsContext = useContext(RefsContext);

  const techList = ['cplusplus', 'java', 'python', 'js', 'html5', 'css3', 'node', 'react', 'git'];

  return (
    <section>
      <div className={styles.container} ref={refsContext.aboutRef as RefObject<HTMLDivElement>}>

        <img src={pp} className={styles.pp} alt="profile picture" />

        <Fieldset title="Basic Info" className={styles.basic}>
          <ul>
            <ListItem icon="svg-location" mainText="Belo Horizonte - MG" secText="Brazil" />
            <ListItem icon="svg-school" mainText="Computer Science - UFV" secText="2017 - 2022" />
            <ListItem icon="svg-earth" mainText="Portuguese" secText="Native" />
            <ListItem icon="" mainText="English" secText="Advanced" />
            <ListItem icon="" mainText="Spanish" secText="Intermediate" />
          </ul>
        </Fieldset>

        <Fieldset title="Current main interests" className={styles.inter}>
          <ul>
            <ListItem icon="svg-code" mainText="Web Development" secText="Full Stack" />
            <ListItem icon="svg-code" mainText="Mobile Development" secText="Full Stack" />
            <ListItem icon="svg-code" mainText="Machine Learning" secText=" " />
          </ul>
        </Fieldset>

        <p className={styles.txt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>

        <Fieldset title="Some technologies with which I had experience" className={styles.tech}>
          <TechGrid list={techList}/>
        </Fieldset>

      </div>
    </section>
  )
}

export default About;