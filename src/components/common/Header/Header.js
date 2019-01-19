import injectSheet from "react-jss";
import React, { Component } from "react";
import logo from "./assets/logo.png";
import theme from "../../../theme";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="concierge" />
        <div className={classes.headerText}>Welcome to Concierge App !</div>
      </div>
    );
  }
}

const styles = {
  headerText: {
    fontSize: 30
  },
  logo: {
    marginTop: 20,
    marginLeft: 20,
    height: "auto",
    width: "auto",
    maxWidth: 150,
    maxHeight: 150
  },
  header: {
    color: theme.colors.red,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }
};

export default injectSheet(styles)(Header);
