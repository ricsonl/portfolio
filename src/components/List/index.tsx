import React from 'react';

import styles from './styles.module.css';

const List = (props) => {

  return (
    <>
      <h3 className={styles.title}>{props.title}</h3>
      <ul className={styles.myList}>
        {props.children}
      </ul>
    </>
  )
}

export default List;