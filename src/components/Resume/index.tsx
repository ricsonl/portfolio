import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';

import './styles.css';

const Resume = () => {

    const refsContext = useContext(RefsContext);
    
    return (
        <section>
            <div className="resume" ref={refsContext.resumeRef as RefObject<HTMLDivElement>}>
                <h2>Resume (soon)</h2>
                <svg style={{ fill: '#45a29e', height: '70px', marginTop: '15px' }}><use xlinkHref={`#icon-build`}></use></svg>
            </div>
        </section>
    )
}

export default Resume;