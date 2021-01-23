import React from 'react';
import styles from './styles.module.css';

const Logo = (props: any) => {
  return (
    <div className={styles.area}>
      <svg onClick={() => props.toggle(true)}><use xlinkHref={`#${props.moreIcon}`}></use></svg>
      <div className={styles.logo}>
        <p className={styles.r}>R</p>
        <p className={styles.v}>V</p>
      </div>
    </div>
  )
}

export default Logo;