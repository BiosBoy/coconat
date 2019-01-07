import { LOCATION_CHANGE } from 'connected-react-router';
import { SWITCH_IMAGE, SOME_ASYNC_ACTION } from '../constants';
import initialState from '../controller/initialState';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SWITCH_IMAGE]: (state, action) => ({
    ...state,
    imageToShow: action.imageID
  }),
  [SOME_ASYNC_ACTION]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [LOCATION_CHANGE]: (state, action) => ({
    ...state,
    locationChange: action.payload.location.pathname
  })
};

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
