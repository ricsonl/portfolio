import React from 'react';
import './styles.css';

const NavButton = (props: any) => {

    return (
        <button className="nb" onClick={props.onClick}>
            <div>
                <svg className="icon"><use xlinkHref={`#${props.icon}`}></use></svg>
                <p>{props.text}</p>
            </div>
        </button>
    )
}

export default NavButton;