// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(
  initialState: Object = { simpleReducer: null, authReducer: null }
) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
