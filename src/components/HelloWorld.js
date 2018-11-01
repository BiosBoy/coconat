import React, { PureComponent, Fragment } from 'react';
import styles from '../styles/index.scss';

class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className={styles.helloWorld}>Hello World!</div>
        <div className={styles.helloStart}> Do not wait, start coding now! :)</div>
      </Fragment>
    );
  }
}

export default Footer;
