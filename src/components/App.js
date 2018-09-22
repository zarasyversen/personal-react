import React, { Component } from 'react';
import LandingPage from './LandingPage';
import HomePage from './Home';

class App extends Component {
  state = {
    atLanding: true
  }

  changeView() {
    this.setState({ atLanding: false });
  }

  render() {
    if (this.state.atLanding) {
      return (<LandingPage goToHome={() => this.changeView()} />);
    }

    return (
      <HomePage />
    );
  }
}

export default App;
