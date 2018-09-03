import React, { Component } from 'react';
import background from '../images/backgrounds/clouds.jpg';
import '../css/Home.css';


class Square extends Component {

  componentDidMount () {
    const path = document.querySelector('.box__path'),
    length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }
  
  render() {
    return (
      <svg width="800" 
      height="410" 
      viewBox="0 0 800 410" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-labelledby="title">
      <title id="title" lang="en">Outlined Box</title>
      <path className="box__path" d="M687.642 407.79V2.107H2.432L3.714 407.79z" stroke="#000" strokeWidth="10" fill="none" fillRule="evenodd"/>
      </svg>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="home">
         <Square />
          <div className="home__content">
          <h2>Hej Hej</h2>
          <h1><span className="name">My name is Zara and I am a </span>
            <span className="role"> Front End Developer</span>
            <span className="place">in Brighton</span></h1>
          <a href="/nav">Is this enough</a>
        </div>
      </div>
    );
  }
}

export default Home;
