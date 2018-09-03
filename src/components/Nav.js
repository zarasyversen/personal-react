import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
	<div className="wrapper">
	  	<nav className="nav__container">
		    <div className="nav__item current">
		      <h3>How I am spending my days right now</h3>
		    </div>
		    <div className="nav__item background">
		      <h3>Where I am from</h3>
		    </div>
		    <div className="nav__item community">
		      <h3>How much I love a good community like codebar</h3>
		    </div>
		    <div className="nav__item fun-stuff">
		      <h3>Fun</h3>
		    </div>
		    <div className="nav__item proud-stuff">
		      <h3>Things I am proud of</h3>
		    </div>
	  	</nav>
  	</div>
    );
  }
}

export default Nav;
