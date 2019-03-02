// @flow

import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from './authReducer';

// $FlowFixMe
export default combineReducers({
  test: simpleReducer,
  auth: authReducer,
});
