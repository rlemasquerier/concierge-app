import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { TextField } from '@material-ui/core';
import theme from '../../../theme';

type Props = {
  classes: Object,
};

class InputField extends Component<Props> {
  render() {
    const { classes, error, touched, label, placeholder, ...props } = this.props;
    console.log(label);
    return (
      <div className={classes.container}>
        <TextField
          error={error && touched}
          variant="outlined"
          label={label || placeholder}
          {...props}
        />
        {error && touched && <div className="input-feedback">{error}</div>}
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: theme.margins.medium,
  },
  error: {},
};

export default injectSheet(styles)(InputField);
