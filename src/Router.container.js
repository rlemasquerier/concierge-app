// @flow

import { connect } from 'react-redux';
import Router from './Router';

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null
)(Router);
