import React from 'react';
import './styles.css';

const Projects = (props: any) => {
    return (
        <section>
            <div className="projects" ref={props.contentRef}>
                <h1>Projects (soon)</h1>
                <svg style={{ fill: '#45a29e', height: '80px' }}><use xlinkHref={`#icon-build`}></use></svg>
            </div>
        </section>
    )
}

export default Projects;