import React, { useRef } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {

  const contentRefs = {
    homeRef: useRef() as React.MutableRefObject<HTMLElement>,
    resumeRef: useRef() as React.MutableRefObject<HTMLElement>,
    projectsRef: useRef() as React.MutableRefObject<HTMLElement>,
    contactRef: useRef() as React.MutableRefObject<HTMLElement>,
  }

  return (
    <>
      <Navbar contentRefs={contentRefs} />

      <Home contentRef={contentRefs.homeRef} />
      <Resume contentRef={contentRefs.resumeRef} />
      <Projects contentRef={contentRefs.projectsRef} />
      <Contact contentRef={contentRefs.contactRef} />
    </>
  );
}

export default App;
