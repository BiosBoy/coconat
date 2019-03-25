import React, { memo, useCallback } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from '../styles/index.scss';
import buttonsStyles from '../styles/button.scss';
import body from '../styles/body.scss';

const FIRST_IMAGE_ID = 1;
const SECOND_IMAGE_ID = 2;

interface IBody {
  imageToShow: number
  switchImage: (imgNumber: number) => void
}

const Body = memo((props: IBody) => {
  const { imageToShow, switchImage } = props;

  const handlerClick = useCallback(
    () => {
      if (imageToShow === FIRST_IMAGE_ID) {
        return switchImage(SECOND_IMAGE_ID);
      }

      return switchImage(FIRST_IMAGE_ID);
    },
    [imageToShow, switchImage]
  );

  return (
    <div className={styles.body}>
      <button type='button' onClick={handlerClick} className={buttonsStyles.button}>
        <TransitionGroup className={body.animWrap}>
          <CSSTransition classNames='mainImage' timeout={500} key={imageToShow}>
            <img className={styles.bodyImg} src={`../assets/${imageToShow}.png`} alt='main_img' />
          </CSSTransition>
        </TransitionGroup>
      </button>
    </div>
  );
});

Body.displayName = 'Body';

export default Body;
