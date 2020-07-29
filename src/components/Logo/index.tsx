import React from 'react';
import './styles.css';

import logo from '../../assets/visual_test.svg';

const Logo = (props:any) => {
    return (
        <div className="logo">
            <svg className="more" onClick={() => props.toggle(true)}><use xlinkHref={`#${props.icon}`}></use></svg>
            <img height={35} src={logo} alt="g" />
        </div>
    )
}

export default Logo;