import React, { Component } from 'react';
import injectSheet from 'react-jss';
import theme from '../../../theme';

type Props = {
  children: React.Node,
  classes: Object,
};

class Card extends Component<Props> {
  render() {
    const { classes } = this.props;
    console.log('classes.card', classes.card);
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
