import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {

  render(){
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
