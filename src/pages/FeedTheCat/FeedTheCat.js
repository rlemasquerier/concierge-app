import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Page, Button } from '../../components/common';

type Props = {
  classes: Object,
  getFeedRecords: () => Promise<any>,
};

class FeedTheCat extends Component<Props> {
  onClickFeedCat = async () => {
    await this.props.addFeedRecord();
    await this.props.getFeedRecords();
  };
  componentDidMount() {
    this.props.getFeedRecords();
  }
  render() {
    const feedRecords = this.props.feedRecords.feedRecords;
    return (
      <Page>
        <div>Feed The Cat</div>
        <Button onClick={this.onClickFeedCat}>Je lui ai donné à mangé</Button>
        <div>
          {feedRecords &&
            feedRecords.map(record => {
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
