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
    return <MaterialButton color={theme.colors.red}>{this.props.children}</MaterialButton>;
  }
}

const styles = {};

export default injectSheet(styles)(Button);
