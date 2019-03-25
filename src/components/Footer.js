import React, { memo } from 'react';
import styles from '../styles/index.scss';

const Footer = memo(() => {
  return <div className={styles.appFooter}>App Footer</div>;
});

Footer.displayName = 'Footer';

export default Footer;
