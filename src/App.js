// @flow

import React, { Component } from 'react';
import './index.css';
import './icons.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Dashboard, Login } from './pages';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
