import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const homeRef = React.createRef();
  const resumeRef = React.createRef();
  const projectsRef = React.createRef();
  const contactRef = React.createRef();
  return (
    <>
      <Navbar />
      <Home />
      <Resume />
      <Projects />
      <Contact />
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
      =<br/>
    </>
  );
}

export default App;
