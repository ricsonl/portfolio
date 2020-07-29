import React from 'react';
import './styles.css';

const Logo = (props:any) => {
    return (
        <div className="area">
            <div onClick={() => props.toggle(true)}>
                <svg className="moreicon"><use xlinkHref={`#${props.icon}`}></use></svg>
            </div>
            <svg className="logo"><use xlinkHref='#logo'></use></svg>
        </div>
    )
}

export default Logo;