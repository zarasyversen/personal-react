import React, { Component } from 'react';
import LandingPage from './Home';
import HomePage from './Nav';

class App extends Component {
  state = {
    atLanding: true
  }

  changeView() {
    this.setState({ atLanding: false })
  }

  render() {
    if (this.state.atLanding) {
      return (<LandingPage goToHome={() => this.changeView()} />)
    }

    return (
      <HomePage />
    );
  }
}

export default App;
