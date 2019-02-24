// @flow

import { connect } from 'react-redux';
import { simpleAction } from '../../redux/actions/simpleAction';
import Login from './Login';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
