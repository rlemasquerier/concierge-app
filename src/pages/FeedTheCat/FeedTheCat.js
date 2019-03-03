import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Page } from '../../components/common';

type Props = {
  classes: Object,
  getFeedRecords: () => Promise<any>,
};

class FeedTheCat extends Component<Props> {
  componentDidMount() {
    this.props.getFeedRecords();
  }
  render() {
    const feedRecords = this.props.feedRecords.feedRecords;
    return (
      <Page>
        <div>Feed The Cat</div>

        <div>
          {feedRecords.map(record => {
            return (
              <div key={record._id}>
                Nourri le {record.date} par {record.user}
              </div>
            );
          })}
        </div>
        <Link to={`/`}>Retour au Dashboard</Link>
      </Page>
    );
  }
}

const styles = {};

export default injectSheet(styles)(FeedTheCat);
