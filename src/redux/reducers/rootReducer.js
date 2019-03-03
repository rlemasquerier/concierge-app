// @flow

import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from './authReducer';
import feedRecordsReducer from './feedRecordsReducer';

// $FlowFixMe
export default combineReducers({
  test: simpleReducer,
  feedRecords: feedRecordsReducer,
  auth: authReducer,
});
