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
    return (
      <div className={classes.container}>
        <TextField variant="outlined" label={label || placeholder} {...props} />
        {error && touched && <div className={classes.error}>{error}</div>}
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: theme.margins.medium,
  },
  error: {
    fontSize: 11,
    color: theme.colors.red,
  },
};

export default injectSheet(styles)(InputField);
