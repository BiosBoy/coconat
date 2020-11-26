import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createResponsiveStateReducer } from 'redux-responsive'

import app from '../../controller/reducers'
import history from '../history'

// root Redux reducer
const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    app,
    router: connectRouter(history),
    browser: createResponsiveStateReducer({
      mobile: 600,
      tablet: 1000,
      desktop: 5000
    })
  })
}

// Splite-Chunks environment, probably you would always need this
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  store.asyncReducers[key] = reducer

  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
