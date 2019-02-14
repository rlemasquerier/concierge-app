import injectSheet from 'react-jss';
import React, { Component } from 'react';
import logo from './assets/logo.png';
import theme from '../../../theme';

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="concierge" />
        <div className={classes.headerContainer}>Welcome to Concierge App !</div>
      </div>
    );
  }
}

const styles = {
  headerContainer: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    '@media (max-width: 500px)': {
      fontSize: 20,
    },
  },
  logo: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    height: 'auto',
    width: 'auto',
    maxWidth: 150,
    maxHeight: 150,
    '@media (max-width: 500px)': {
      maxWidth: 100,
      maxheight: 100,
    },
  },
  header: {
    color: theme.colors.red,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export default injectSheet(styles)(Header);
