import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import './styles.css';

const Contact = () => {

    const refsContext = useContext(RefsContext);

    return (
        <section>
            <div className="contact" ref={refsContext.contactRef as RefObject<HTMLDivElement>}>
                <div className="inner">
                    <h2>Contact (soon)</h2>
                    <svg style={{ fill: '#45a29e', height: '70px', marginTop: '15px'}}><use xlinkHref={`#icon-build`}></use></svg>
                </div>
            </div>
        </section>
    )
}

export default Contact;