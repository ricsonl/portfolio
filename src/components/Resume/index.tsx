import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import './styles.css';

const Resume = () => {

    const refsContext = useContext(RefsContext);
    
    return (
        <section>
            <div className="resume" ref={refsContext.resumeRef as RefObject<HTMLDivElement>}>
                <h1>Resume (soon)</h1>
                <svg style={{ fill: '#45a29e', height: '80px' }}><use xlinkHref={`#icon-build`}></use></svg>
            </div>
        </section>
    )
}

export default Resume;