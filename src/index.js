import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/Home';
import Nav from './components/Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/nav" component={Nav} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
