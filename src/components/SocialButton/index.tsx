import React from 'react';
import styles from './styles.module.css';

const SocialButton = (props: any) => {
    const newTab = (url) => {
        var win = window.open(url, '_blank');
        if (win) { win.focus(); }
    };

    return (
        <button className={styles.sb} onClick={() => newTab(props.href)}>
            <svg className={styles.icon}><use xlinkHref={`#${props.icon}`}></use></svg>
        </button>
    )
}

export default SocialButton;