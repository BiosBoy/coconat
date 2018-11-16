import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import common from '../reducers';

const makeRootReducer = asyncReducers => {
  return combineReducers({
    ...asyncReducers,
    common,
    routing
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducer;

  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
