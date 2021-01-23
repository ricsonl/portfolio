import React from 'react';
import styles from './styles.module.css';

const NavButton = (props: any) => {

    return (
        <button className={styles.nb} onClick={props.onClick}>
            <div>
                <svg className={styles.icon}><use xlinkHref={`#${props.icon}`}></use></svg>
                <p>{props.text}</p>
            </div>
        </button>
    )
}

export default NavButton;