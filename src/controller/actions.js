import { COUNT_ADD, SOME_ASYNC_ACTION } from '../constants';

const addCount = count => ({
  type: COUNT_ADD,
  count
});

const someAsyncAction = payload => ({
  type: SOME_ASYNC_ACTION,
  payload
});

export { addCount, someAsyncAction };
