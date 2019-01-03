import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import initialState from './initialState';
import history from './history';

import { logger, makeRootReducer, sagaMiddleware as saga, rootSaga, runSaga } from './middleware';

const rootStore = () => {
  const middleware = [routerMiddleware(history), saga, logger];
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

  store.runSaga = runSaga;
  runSaga(rootSaga);
  store.asyncReducers = {};

  return store;
};

export default rootStore();
