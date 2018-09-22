import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import TweenMax from 'gsap/TweenMax';
import '../css/Nav.css';

class Nav extends Component {
  componentDidMount() {
    const { elTime, easing } = this.props;
    TweenMax.fromTo(this.home, elTime, {
      y: -1000,
    }, {
      y: 0,
      ease: `${easing}.easeOut`
    });
  }

  render() {
    return (
      <div className="wrapper" ref={c => this.home = c}>
        <nav className="nav__container">
          <a className="nav__item current" href="#">
            <h3>How I am spending my days right now</h3>
          </a>
          <a className="nav__item background" href="#">
            <h3>Where I am from</h3>
          </a>
          <a className="nav__item community" href="#">
            <h3>How much I love a good community like codebar</h3>
          </a>
          <a className="nav__item fun-stuff" href="#">
            <h3>Fun</h3>
          </a>
          <a className="nav__item proud-stuff" href="#">
            <h3>Things I am proud of</h3>
          </a>
        </nav>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <TransitionGroup>
        <Nav elTime={.4} easing="Power1"/>
      </TransitionGroup>
    )
  }
}

export default Home;
