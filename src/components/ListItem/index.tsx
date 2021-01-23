import React from 'react';

import styles from './styles.module.css';

const ListItem = (props) => {

  return (
    <li className={styles.myListItem}>
      <svg className={styles.icon}><use xlinkHref={`#${props.icon}`}></use></svg>
      <p className={styles.mainText}>{props.mainText}</p>
      <p className={styles.secText}>{props.secText}</p>
    </li>
  )
}

export default ListItem;