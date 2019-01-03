import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Header, Footer, Body } from '../components';
import styles from '../styles/index.scss';

const AppContainer = ({ store, history }) => {
  return (
    <Provider store={store} history={history}>
      <ConnectedRouter history={history}>
        <div className={styles.appWrapper}>
          <Header />
          <Route exact path='/' component={Body} />
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default AppContainer;
