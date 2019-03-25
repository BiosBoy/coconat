import React, { memo } from 'react';
import styles from '../styles/index.scss';

const Header = memo(() => {
  return <div className={styles.appHeader}>App Headers</div>;
});

Header.displayName = 'Header';

export default Header;
