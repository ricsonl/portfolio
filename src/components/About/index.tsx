import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';
import { FormattedMessage } from 'react-intl';

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

        <Fieldset title={<FormattedMessage id="info"/>} className={styles.basic}>
          <ul>
            <ListItem icon="svg-location" mainText="Belo Horizonte - MG" secText={<FormattedMessage id="br"/>} />
            <ListItem icon="svg-school" mainText={<FormattedMessage id="ccp"/>} secText="2017 - 2022" />
            <ListItem icon="svg-earth" mainText={<FormattedMessage id="pt"/>} secText={<FormattedMessage id="native"/>} />
            <ListItem icon="" mainText={<FormattedMessage id="en"/>} secText={<FormattedMessage id="advanced"/>} />
            <ListItem icon="" mainText={<FormattedMessage id="es"/>} secText={<FormattedMessage id="intermediate"/>} />
          </ul>
        </Fieldset>

        <Fieldset title={<FormattedMessage id="interests"/>} className={styles.inter}>
          <ul>
            <ListItem icon="svg-code" mainText={<FormattedMessage id="web"/>} secText="Full Stack" />
            <ListItem icon="svg-code" mainText={<FormattedMessage id="mobile"/>} secText="Full Stack" />
            <ListItem icon="svg-code" mainText={<FormattedMessage id="ml"/>} secText=" " />
          </ul>
        </Fieldset>

        <p className={styles.txt}>
          <FormattedMessage id="aboutme"/>
        </p>

        <Fieldset title={<FormattedMessage id="exp"/>} className={styles.tech}>
          <TechGrid list={techList}/>
        </Fieldset>

      </div>
    </section>
  )
}

export default About;