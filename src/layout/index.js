import React from 'react';

import { Sankey } from '../components';

import styles from '../styles/index.scss';

const CoreLayout = () => {
  return (
    <div className={styles.appWrapper}>
      <Sankey />
    </div>
  );
};

export default CoreLayout;
