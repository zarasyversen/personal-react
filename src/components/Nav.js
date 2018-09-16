import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="wrapper">
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

export default Nav;
