import React from 'react';
import './styles.css';

const Resume = (props: any) => {
    return (
        <section>
            <div className="resume" ref={props.contentRef}>
                <h1>Resume (soon)</h1>
                <svg style={{ fill: '#45a29e', height: '80px' }}><use xlinkHref={`#icon-build`}></use></svg>
            </div>
        </section>
    )
}

export default Resume;