// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import moment from 'moment';
import LEDControl from '../../components/LEDControl/LEDControl';
import '../../index.css';
import '../../icons.css';
import { Page } from '../../components/common';

type Props = {
  classes: Object,
};
class App extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Page>
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
      </Page>
    );
  }
}

const styles = {
  main: {
    flex: 3,
  },
  homeIcon: {
    fontSize: 50,
  },
};

export default injectSheet(styles)(App);
