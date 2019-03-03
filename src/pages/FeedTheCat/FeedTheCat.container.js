// @flow

import { connect } from 'react-redux';
import { getAllRecords, addRecord } from '../../redux/actions/feedRecordsActions';
import FeedTheCat from './FeedTheCat';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  getFeedRecords: () => dispatch(getAllRecords()),
  addFeedRecord: () => dispatch(addRecord()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedTheCat);
