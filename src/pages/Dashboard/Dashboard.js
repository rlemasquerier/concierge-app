// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import moment from 'moment';
import LEDControl from '../../components/LEDControl/LEDControl';
import '../../index.css';
import '../../icons.css';
import Header from '../../components/common/Header/Header';

type Props = {
  classes: Object,
};
class App extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.main}>
          <hr />
          <div>Content</div>
          <div>
            {moment()
              .locale('fr')
              .format('MMMM Do YYYY')}
          </div>
          <LEDControl />
          <span className={['icon-home', classes.homeIcon].join(' ')} />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },

  main: {
    flex: 3,
  },
  homeIcon: {
    fontSize: 50,
  },
};

export default injectSheet(styles)(App);
