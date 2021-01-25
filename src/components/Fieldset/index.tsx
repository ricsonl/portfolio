import React from 'react';

import styles from './styles.module.css';

const Fieldset = (props) => {

  return (
    <fieldset className={`${props.className} ${styles.container}`}>
      <legend className={styles.title}>{props.title}</legend>
      {props.children}
    </fieldset>
  )
}

export default Fieldset;