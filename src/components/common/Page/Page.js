// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { Header } from '../../common';

type Props = {
  children: React.Node,
  classes: Object,
};

class Page extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export default injectSheet(styles)(Page);
