import React from 'react';
import './styles.css';

const NavButton = (props: any) => {
    
    const handleClick = () => {
        if(props.contentRef.current)
            props.contentRef.current.scrollIntoView({ behavior: 'smooth' });
        props.toggle(false);
    };

    return (
        <>
            <button className="nb" onClick={handleClick}>
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