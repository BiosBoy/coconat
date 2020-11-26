import { Store } from 'redux'
import makeRootReducer from '../middleware/rootReducer'

import { IAsyncReducersStore } from '../../interfaces/IStore'

const activateStoreHMR = (store: Store<any> & IAsyncReducersStore) => {
  // Hot Module Replacement for Controller/Store
  if (module.hot) {
    module.hot.accept('../middleware/rootReducer', () => {
      store.replaceReducer(makeRootReducer(store.asyncReducers))
    })
  }
}

export default activateStoreHMR
