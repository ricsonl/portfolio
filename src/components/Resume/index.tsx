import React from 'react';
import './styles.css';

const Resume = (props: any) => {
    return (
        <section>
            <div className="resume" ref={props.contentRef}>
                <h1>Resume</h1>
                <p>bla bla bla</p>
            </div>
        </section>
    )
}

export default Resume;