import React from 'react';
import './styles.css';

const Logo = (props:any) => {
    return (
        <div className="area">
            <div onClick={() => props.toggle(true)}>
                <svg className="moreicon"><use xlinkHref={`#${props.moreIcon}`}></use></svg>
            </div>
            {/*<svg className="logo"><use xlinkHref={`#${props.logo}`}></use></svg>*/}
            <h1 style={{ color: '#593d8d'}}>R</h1>
        </div>
    )
}

export default Logo;