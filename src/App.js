// @flow

import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
// $FlowFixMe
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store';
import './index.css';
import './icons.css';
import Router from './Router.container';
import { muiTheme } from './theme';

type Props = {};
class App extends Component<Props> {
  render() {
    const { store, persistor } = configureStore();
    persistor.purge();
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
