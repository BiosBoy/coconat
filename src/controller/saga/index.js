import { takeLatest } from 'redux-saga/effects';
import { testSaga } from './testSaga';
import { SOME_SAGA } from '../../constants';

export default function* watchSagas() {
  yield takeLatest(SOME_SAGA, testSaga);
}
