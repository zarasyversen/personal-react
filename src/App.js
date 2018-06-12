import React, { Component } from 'react';
import logo from './logo.svg';
import background from './images/backgrounds/clouds.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="home__content">
        <h2>Hej Hej,</h2>
        <h1><span class="name">My name is Zara and I am</span><span class="role"> a Front End Developer</span><span class="place">in Brighton</span></h1>
        </div>
        <div className="home__image">
          <img src={background} alt="clouds" />
        </div>
      </div>
    );
  }
}

export default App;
