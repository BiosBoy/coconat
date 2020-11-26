import { takeLatest } from 'redux-saga/effects'
import saga from './saga'
import { SOME_SAGA } from '../../constants'

export default function* watchSagas() {
  yield takeLatest(SOME_SAGA, saga)
}
