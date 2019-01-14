import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import initialState from './initialState';
import history from './history';

import { logger, makeRootReducer, sagaMiddleware as saga, rootSaga, runSaga } from './middleware';

// creating the root store config
const rootStore = () => {
  const middleware = [];

  // Adding app routing
  middleware.push(routerMiddleware(history));

  // Adding async Saga actions environment
  middleware.push(saga);

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
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  // saga injecting during code-splitting
  store.runSaga = runSaga;
  runSaga(rootSaga);
  store.asyncReducers = {};

  return store;
};

export default rootStore();
