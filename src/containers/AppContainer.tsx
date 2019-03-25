import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import CoreLayout from '../layout';

interface IAppContainer {
  store: any
  history: any
}

const AppContainer = ({ store, history }: IAppContainer) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CoreLayout />
      </ConnectedRouter>
    </Provider>
  );
};

export default AppContainer;
