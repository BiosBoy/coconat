// saga entry point - propbably you don't need this
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import createSagaMiddlewareHelpers from 'redux-saga-watch-actions/lib/middleware';
import watchSagas from '../../modules/saga';

const sagaMiddleware = createSagaMiddleware();
const runSaga = saga => sagaMiddleware.run(saga);

const { injectSaga, cancelTask } = createSagaMiddlewareHelpers(sagaMiddleware); // <-- bind to sagaMiddleware.run

export function* rootSaga() {
  yield all([watchSagas()]);
}

export { cancelTask, injectSaga, runSaga };
export default sagaMiddleware;
