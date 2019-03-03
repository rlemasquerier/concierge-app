import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Page } from '../../components/common';

type Props = {
  classes: Object,
};

class FeedTheCat extends Component<Props> {
  render() {
    return (
      <Page>
        <div>Feed The Cat</div>
      </Page>
    );
  }
}

const styles = {};

export default injectSheet(styles)(FeedTheCat);
