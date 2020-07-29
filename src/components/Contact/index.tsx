import React from 'react';
import './styles.css';

const Contact = (props: any) => {
    return (
        <section>
            <div className="contact" ref={props.contentRef}>
                <h1>Contact</h1>
                <p>bla bla bla</p>
            </div>
        </section>
    )
}

export default Contact;