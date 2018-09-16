import React, { Component } from 'react';
import '../css/Home.css';
import {TransitionGroup } from 'react-transition-group';
import TweenMax from "gsap/TweenMax";

// SVG Square
class Square extends Component {
  componentDidMount() {
    const path = document.querySelector('.box__path');
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }
  
  render() {
    return (
      <svg 
        width="800" 
        height="410" 
        viewBox="0 0 800 410" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-labelledby="title">
        <title id="title" lang="en">Outlined Box</title>
        <path 
          className="box__path" 
          d="M687.642 407.79V2.107H2.432L3.714 407.79z" 
          stroke="#000" 
          strokeWidth="10" 
          fill="none" 
          fillRule="evenodd" 
        />
      </svg>
    );
  }
}

// Navigation Button - Appears after animation
class NavButton extends Component {
  componentDidMount() {
    const { elTime, easing } = this.props;
    TweenMax.fromTo(this.navbutton, elTime, {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      delay: 4.8,
      ease: `${easing}.easeOut`
    });
  }

  render() {
    return (
      <span className="nav__button" ref={c => this.navbutton = c}>Find out more</span>
    );
  }
}

// Home Page
class LandingPage extends Component {
  render() {
    return (
      <div className="home" onClick={() => this.props.goToHome()}>
        <Square />
        <div className="home__content">
          <h2>Hej Hej</h2>
          <h1><span className="name">My name is Zara and I am a </span>
            <span className="role"> Front End Developer</span>
            <span className="place">in Brighton</span></h1>
        </div>
        <TransitionGroup className="home__button">
          {<NavButton elTime={.4} easing="Power1" />}
        </TransitionGroup>
      </div>
    );
  }
}

export default LandingPage;
