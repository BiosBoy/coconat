import React, { PureComponent } from 'react';
import { Header, Footer, HelloWorld } from '../components';
import styles from '../styles/index.scss';

class AppContainer extends PureComponent {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Header />
        <HelloWorld />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
