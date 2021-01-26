import React, { useContext, RefObject } from 'react';

import RefsContext from '../../context/RefsContext';
import { FormattedMessage } from 'react-intl';

import styles from './styles.module.css';

const Projects = () => {

    const refsContext = useContext(RefsContext);

    return (
        <section>
            <div className={styles.projects} ref={refsContext.projectsRef as RefObject<HTMLDivElement>}>
                <h2><FormattedMessage id="soon"/></h2>
                <svg style={{ fill: '#45a29e', height: '70px', marginTop: '15px' }}><use xlinkHref={`#icon-build`}></use></svg>
            </div>
        </section>
    )
}

export default Projects;