import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer, HelloWorld } from '../components';
import styles from '../styles/index.scss';

const AppContainer = ({ store, history }) => {
  return (
    <Provider store={store} history={history}>
      <div className={styles.appWrapper}>
        <Header />
        <HelloWorld />
        <Footer />
      </div>
    </Provider>
  );
};

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default AppContainer;
