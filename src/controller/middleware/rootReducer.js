// root Redux reducers for Splite-Chunks mode,
// probably you would always need this
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from '../../modules/reducers';
import history from '../history';

const makeRootReducer = asyncReducers => {
  return combineReducers({
    ...asyncReducers,
    app,
    router: connectRouter(history)
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducer;

  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
