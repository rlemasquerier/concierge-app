// @flow

import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import './index.css';
import './icons.css';
import { Dashboard, Login } from './pages';
import { muiTheme } from './theme';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
