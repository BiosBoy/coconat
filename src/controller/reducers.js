import { COUNT_ADD, SOME_ASYNC_ACTION } from '../constants';
import initialState from './initialState';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNT_ADD]: (state, action) => ({
    ...state,
    count: action.count,
    countDoubl: action.count % 2 === 0 ? action.count : state.countDoubl
  }),
  [SOME_ASYNC_ACTION]: (state, action) => ({
    ...state,
    ...action.payload
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
