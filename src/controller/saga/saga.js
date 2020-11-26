import { put } from 'redux-saga/effects';
import { someAsyncAction } from '../actions/actions';

export function* saga() {
  try {
    const payload = yield fetch('https://www.github.com');

    // throw an error if no payload received
    if (!payload) {
      throw new Error('Error in payload!');
    }

    // some payload from the responce received
    yield put(someAsyncAction(payload));
  } catch (error) {
    throw new Error('Some error in sagas occured!');
  }
}

export default saga;
