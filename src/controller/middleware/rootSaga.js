// saga entry point - propbably you do not need it
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import createSagaMiddlewareHelpers from 'redux-saga-watch-actions/lib/middleware';
import someSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const runSaga = saga => sagaMiddleware.run(saga);

const { injectSaga, cancelTask } = createSagaMiddlewareHelpers(sagaMiddleware); // <-- bind to sagaMiddleware.run

export function* rootSaga() {
  yield all([someSaga()]);
}

export { cancelTask, injectSaga, runSaga };
export default sagaMiddleware;
