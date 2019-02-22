// @flow

import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Header } from '../../components/common/Header';

type Props = {
  classes: Object,
};

type State = {};

class Login extends Component<Props, State> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.main}>
          <hr />
          <div>Content</div>
          <div>Log in form</div>
        </div>
      </div>
    );
  }
}

const styles = {};

export default injectSheet(styles)(Login);
