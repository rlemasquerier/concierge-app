// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { Button as MaterialButton } from '@material-ui/core';
import theme from '../../../theme';

type Props = {
  children: React.Node,
  classes: Object,
};
class Button extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <MaterialButton variant="contained" color="secondary">
          {this.props.children}
        </MaterialButton>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: theme.margins.medium,
  },
};

export default injectSheet(styles)(Button);
