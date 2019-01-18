import React, { Component } from "react";
import injectSheet from "react-jss";
import moment from "moment";
import LEDControl from "./components/LEDControl/LEDControl";
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
          <div>
            {moment()
              .locale("fr")
              .format("MMMM Do YYYY")}
          </div>
          <LEDControl />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
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
