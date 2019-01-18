import React, { Component } from "react";
import Switch from "react-switch";
import axios from "axios";

class LEDControl extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }
  handleChange = checked => {
    this.setState({ checked });
  };
  componentDidUpdate() {
    axios
      .get("http://89.86.71.5/led-control")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <span>LED :</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </div>
    );
  }
}

export default LEDControl;
