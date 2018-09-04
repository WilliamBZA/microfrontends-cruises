import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Cruise, CruiseNavButton } from './cruises.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <div className="App-intro">
        <CruiseNavButton></CruiseNavButton>
          To get started, edit <code>src/App.js</code> and save to reload.
          <Cruise></Cruise>
        </div>
      </div>
    );
  }
}

export default App;
