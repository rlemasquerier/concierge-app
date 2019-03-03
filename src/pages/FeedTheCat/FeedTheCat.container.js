// @flow

import { connect } from 'react-redux';
import { getAllRecords } from '../../redux/actions/feedRecordsActions';
import FeedTheCat from './FeedTheCat';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  getFeedRecords: () => dispatch(getAllRecords()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedTheCat);
