import { COUNT_ADD } from '../constants';
import initialState from './initialState';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNT_ADD]: (state, action) => ({
    ...state,
    count: action.count,
    countDoubl: action.count % 2 === 0 ? action.count : state.countDoubl
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
