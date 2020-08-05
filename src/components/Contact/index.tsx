import React from 'react';
import './styles.css';

const Contact = (props: any) => {

    return (
        <section>
            <div className="contact" ref={props.contentRef}>
                <div className="inner">
                    <h1>Contact (soon)</h1>
                    <svg style={{ fill: '#45a29e', height: '80px'}}><use xlinkHref={`#icon-build`}></use></svg>
                </div>
            </div>
        </section>
    )
}

export default Contact;