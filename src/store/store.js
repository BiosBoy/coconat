import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import initialState from './initialState';

import history from './history';

import logger from './helpers/reduxLogger';
import activeStoreHMR from './helpers/storeHMR';

import sagaMiddleware, { runSaga, rootSaga } from './middleware/rootSaga';
import rootReducer from './middleware/rootReducer';

// creating the root store config
const rootStore = () => {
  const middleware = [];

  // Adding app routing
  middleware.push(routerMiddleware(history));

  // Adding async Saga actions environment
  middleware.push(sagaMiddleware);

  // Adding console logger for Redux
  middleware.push(logger);

  const enhancers = [];

  // allow to use the redux browser plugin
  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createStore(rootReducer(), initialState, compose(applyMiddleware(...middleware), ...enhancers));

  store.asyncReducers = {};

  runSaga(rootSaga);
  activeStoreHMR(store);

  return store;
};

export default rootStore();
