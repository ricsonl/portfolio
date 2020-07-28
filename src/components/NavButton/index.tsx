import React from 'react';
import './styles.css';

const NavButton = (props: any) => {
    return (
        <>
            <button className="nb">
                <div className="nb-div">
                    <i className={`nb-i ${props.icon}`}></i>
                    <p className="nb-p">{props.text}</p>
                </div>
            </button>
            <div className="nb-border"></div>
        </>
    )
}

export default NavButton;