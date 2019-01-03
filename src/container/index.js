import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Header, Footer, HelloWorld } from '../components';
import styles from '../styles/index.scss';

const AppContainer = ({ store, history }) => {
  return (
    <Provider store={store} history={history}>
      <ConnectedRouter history={history}>
        <div className={styles.appWrapper}>
          <Header />
          <Switch location={location}>
            <Route exact path='/' component={HelloWorld} />
          </Switch>
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
