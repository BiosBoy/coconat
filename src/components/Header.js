import React, { PureComponent } from 'react';
import styles from '../styles/index.scss';

class Header extends PureComponent {
  render() {
    return <div className={styles.appHeader}>App Headers</div>;
  }
}

export default Header;
