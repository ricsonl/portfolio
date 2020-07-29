import React from 'react';
import './styles.css';

import logo from '../../assets/visual_test.svg';

const Logo = (props:any) => {
    return (
        <div className="logo">
            <div onClick={() => props.toggle(true)}>
                <svg className="moreicon"><use xlinkHref={`#${props.icon}`}></use></svg>
            </div>
            <img height={35} src={logo} alt="g" />
        </div>
    )
}

export default Logo;