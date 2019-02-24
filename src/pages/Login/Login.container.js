// @flow

import { connect } from 'react-redux';
import { simpleAction } from '../../redux/actions/simpleAction';
import { login } from '../../redux/actions/userActions';
import Login from './Login';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  login: credentials => dispatch(login(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
