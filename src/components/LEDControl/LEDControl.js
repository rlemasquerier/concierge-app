import React, { Component } from "react";
import Switch from "react-switch";

class LEDControl extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }
  handleChange = checked => {
    this.setState({ checked });
  };
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
