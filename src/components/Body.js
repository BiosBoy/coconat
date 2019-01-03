import React, { PureComponent } from 'react';
import styles from '../styles/index.scss';

class Body extends PureComponent {
  render() {
    return (
      <div className={styles.body}>
        <img
          className={styles.bodyImg}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
          alt='main_img'
        />
      </div>
    );
  }
}

export default Body;
