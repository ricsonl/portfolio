import React, { Component } from 'react';
import './App.css';

import { I18nProvider, LOCALES } from './i18n';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {

  state = {
    locale: LOCALES.PORTUGUESE,
  }

  setLocale = (e) => {
    this.setState({ locale: e.target.value });
  }

  render() {
    return (
      <I18nProvider locale={this.state.locale}>
        <Navbar />
        <select onChange={this.setLocale} className="langSelect">
          <option value={LOCALES.PORTUGUESE} className="langOpt">Português</option>
          <option value={LOCALES.ENGLISH} className="langOpt">English</option>
        </select>
        <Home />
        <About />
        <Projects />
        <Contact />
      </I18nProvider>
    );
  }
}

export default App;
