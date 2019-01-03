import { takeLatest } from 'redux-saga/effects';
import { someSaga } from './someSaga';
import { SOME_SAGA } from '../../constants';

export default function* watchSagas() {
  yield takeLatest(SOME_SAGA, someSaga);
}
