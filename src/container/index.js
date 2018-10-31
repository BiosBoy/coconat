import React, { PureComponent } from 'react';
import { Header } from '../components';
import styles from '../styles/index.scss';

class AppContainer extends PureComponent {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Header />
        Hello World!
      </div>
    );
  }
}

export default AppContainer;
