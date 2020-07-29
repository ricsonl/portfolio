import React from 'react';
import './styles.css';

const NavButton = (props: any) => {
    return (
        <>
            <button className="nb" onClick={() => props.toggle(false)}>
                <div>
                    <svg className="icon"><use xlinkHref={`#${props.icon}`}></use></svg>
                    <p>{props.text}</p>
                </div>
            </button>
            <div className="border"></div>
        </>
    )
}

export default NavButton;