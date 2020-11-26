import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from '../../controller/reducers/reducers';
import history from '../history';

// root Redux reducer
const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    app,
    router: connectRouter(history)
  });
};

// Splite-Chunks environment, probably you would always need this
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducer;

  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
