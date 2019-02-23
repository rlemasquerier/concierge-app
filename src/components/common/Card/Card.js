// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import theme from '../../../theme';

type Props = {
  children: React.Node,
  classes: Object,
};

class Card extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return <div className={classes.card}>{this.props.children}</div>;
  }
}

const styles = {
  card: {
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.white,
    marginTop: theme.margins.medium,
    marginRight: theme.margins.tiny,
    marginLeft: theme.margins.tiny,
    overflow: 'hidden',
    padding: theme.margins.medium,
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
  },
};

export default injectSheet(styles)(Card);
