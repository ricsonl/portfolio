import React from 'react';
import './styles.css';

import logo from '../../assets/visual_test.svg';

const Logo = (props:any) => {
    return (
        <div className="logo">
            <i className="more fas fa-bars" onClick={() => props.toggle(true)}></i>
            <img height={35} src={logo} alt="g" />
        </div>
    )
}

export default Logo;