import React from 'react';
import './styles.css';

const Logo = (props:any) => {
    return (
        <div className="logo">
            <i className="more fas fa-bars" onClick={() => props.moreAction()}></i>
            <img height="40" src="https://www.logo.wine/a/logo/Zelle_(payment_service)/Zelle_(payment_service)-Logo.wine.svg" alt="g" />
        </div>
    )
}

export default Logo;