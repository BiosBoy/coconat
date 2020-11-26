import React, { memo, useCallback } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import cn from 'classnames'

import globalStyles from '../../styles/index.scss'
import buttonsStyles from '../../styles/button.scss'
import bodyStyles from './index.scss'

const FIRST_IMAGE_ID = 1
const SECOND_IMAGE_ID = 2

export interface IBody {
  backgroundColor?: 'red' | 'black' | 'transparent'
  labelText?: string
  withLabel?: boolean
  imageToShow: number
  switchImage: (imgNumber: number) => void
}

const Body = memo((props: IBody) => {
  const { backgroundColor, imageToShow, switchImage, labelText, withLabel } = props

  const handlerClick = useCallback(() => {
    if (imageToShow === FIRST_IMAGE_ID) {
      return switchImage(SECOND_IMAGE_ID)
    }

    return switchImage(FIRST_IMAGE_ID)
  }, [imageToShow, switchImage])

  const bodyClasses = cn({
    [globalStyles.body]: true,
    [bodyStyles[backgroundColor]]: !!backgroundColor
  })

  return (
    <div className={bodyClasses}>
      <button type="button" onClick={handlerClick} className={buttonsStyles.button}>
        <TransitionGroup className={bodyStyles.animWrap}>
          <CSSTransition classNames="mainImage" timeout={500} key={imageToShow}>
            <img className={globalStyles.bodyImg} src={`../assets/${imageToShow}.png`} alt="main_img" />
          </CSSTransition>
        </TransitionGroup>
        {withLabel && <span className={bodyStyles.textLabel}>{labelText || 'Label Placeholder'}</span>}
      </button>
    </div>
  )
})

Body.displayName = 'Body'

export default Body
