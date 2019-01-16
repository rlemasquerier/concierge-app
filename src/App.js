import React, { Component } from "react";
import injectSheet from "react-jss";
import Switch from "react-switch";
import theme from "./theme";
import "./index.css";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.header}>Concierge App</div>
        <div className={classes.main}>
          <div>Content</div>
          <Switch />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "Fredoka One",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.lightGreen
  },
  header: {
    color: theme.colors.red,
    flex: 1
  },
  main: {
    flex: 4
  }
};

export default injectSheet(styles)(App);
