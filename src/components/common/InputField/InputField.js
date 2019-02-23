import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { TextField } from '@material-ui/core';

type Props = {
  classes: Object,
};

class InputField extends Component<Props> {
  render() {
    const { error, touched, label, placeholder, ...props } = this.props;
    console.log(label);
    return (
      <React.Fragment>
        <TextField variant="outlined" label={label || placeholder} {...props} />
        {error && touched && <div className="input-feedback">{error}</div>}
      </React.Fragment>
    );
  }
}

const styles = {};

export default injectSheet(styles)(InputField);
