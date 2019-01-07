import { SWITCH_IMAGE, SOME_ASYNC_ACTION } from '../constants';

const switchImage = imageID => ({
  type: SWITCH_IMAGE,
  imageID
});

const someAsyncAction = payload => ({
  type: SOME_ASYNC_ACTION,
  payload
});

export { switchImage, someAsyncAction };
