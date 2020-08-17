import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import './styles.css';

const Contact = () => {

    const refsContext = useContext(RefsContext);

    return (
        <section>
            <div className="contact" ref={refsContext.contactRef as RefObject<HTMLDivElement>}>
                <div className="inner">
                    <h1>Contact (soon)</h1>
                    <svg style={{ fill: '#45a29e', height: '80px'}}><use xlinkHref={`#icon-build`}></use></svg>
                </div>
            </div>
        </section>
    )
}

export default Contact;