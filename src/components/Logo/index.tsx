import React from 'react';
import './styles.css';

const Logo = (props: any) => {
  return (
    <div className="area">
      <svg onClick={() => props.toggle(true)}><use xlinkHref={`#${props.moreIcon}`}></use></svg>
      <div className="logo">
        <p className="r">R</p>
        <p className="v">V</p>
      </div>
    </div>
  )
}

export default Logo;