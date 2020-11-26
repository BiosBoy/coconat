import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import CoreLayout from '../layout'

interface AppRouting {
  store: any
  history: any
}

const AppRouting = ({ store, history }: AppRouting) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CoreLayout />
      </ConnectedRouter>
    </Provider>
  )
}

export default AppRouting
