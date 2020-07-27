import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Resume} path="/resume" />
        <Route component={Projects} path="/projects" />
        <Route component={Contact} path="/contact" />
      </BrowserRouter>
    </>
  );
}

export default App;
