import { applyMiddleware, compose, createStore } from 'redux';
import initialState from './initialState';

import { logger, makeRootReducer } from './middleware';

const rootStore = () => {
  const middleware = [logger];
  const enhancers = [];

  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  return store;
};

export default rootStore();
