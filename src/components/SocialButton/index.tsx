import React from 'react';
import './styles.css';

const SocialButton = (props: any) => {
    const newTab = (url) => {
        var win = window.open(url, '_blank');
        if (win) { win.focus(); }
    };

    return (
        <button className="sb" onClick={() => newTab(props.href)}>
            <i className={props.icon}></i>
        </button>
    )
}

export default SocialButton;