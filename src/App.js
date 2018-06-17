import React, { Component } from 'react';
import background from './images/backgrounds/clouds.jpg';
import './Home.css';

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__content">
        <h2>Hej Hej,</h2>
        <h1><span className="name">My name is Zara and I am a </span><span className="role"> Front End Developer</span><span className="place">in Brighton</span></h1>
        </div>
        <div className="home__image">
          <img src={background} alt="clouds" />
        </div>
      </div>
    );
  }
}

export default App;
