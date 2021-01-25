import React from 'react';

import styles from './styles.module.css';

const TechGrid = (props) => {

  return (
    <div className={styles.techGrid}>
      {
        props.list.map((name, i) => {
          return <svg key={i} className={styles.techItem}><use xlinkHref={`#svg-${name}`}></use></svg>
        })
      }
    </div>
  );
};

export default TechGrid;