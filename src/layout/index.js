import React from 'react';

import { Body } from '../components';

import styles from '../styles/index.scss';

const CoreLayout = () => {
  return (
    <div className={styles.appWrapper}>
      <Body />
    </div>
  );
};

export default CoreLayout;
