import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(
  initialState: Object = { simpleReducer: null, authReducer: null }
) {
  const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
}
