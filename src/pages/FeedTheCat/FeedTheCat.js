import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Page } from '../../components/common';

type Props = {
  classes: Object,
};

class FeedTheCat extends Component<Props> {
  render() {
    return (
      <Page>
        <div>Feed The Cat</div>
        <Link to={`/`}>Back to dashboard</Link>
      </Page>
    );
  }
}

const styles = {};

export default injectSheet(styles)(FeedTheCat);
