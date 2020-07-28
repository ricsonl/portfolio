import React from 'react';
import './styles.css';

const NavButton = (props: any) => {
    return (
        <>
            <button className="nb" onClick={() => props.action()}>
                <div>
                    <i className={props.icon}></i>
                    <p>{props.text}</p>
                </div>
            </button>
            <div className="border"></div>
        </>
    )
}

export default NavButton;