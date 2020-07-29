import React from 'react';
import './styles.css';

const Projects = (props: any) => {
    return (
        <section>
            <div className="projects" ref={props.contentRef}>
                <h1>Projects</h1>
                <p>bla bla bla</p>
            </div>
        </section>
    )
}

export default Projects;