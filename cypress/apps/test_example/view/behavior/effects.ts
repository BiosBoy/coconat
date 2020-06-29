import firstLetterUpper from '../../../../../shared/utils/firstLetterUpper'

import {
  effectsWrap,
  effectWrap,
  effectBottomLayer,
  effectTopLayer,
  effectsIconsWrap,
  effectsIconsScrollWrap,
  effectIconContainer,
  effectIconWrap,
  effectIcon,
  effectIconImage
} from '../selectors/effects'

import { ICheckEffects, ICheckEffect, ICheckEffectIcon, ICheckEffectBackground } from '../../interfaces/IView'
import { DEFENDER } from '../../constants'
import { TPersonTypes } from '../../interfaces/IController'
import checkStyles from '../../../../utils/checkStyles'

export const checkEffectsWrap = (userType: TPersonTypes, count?: number) => {
  effectsWrap(userType).should('have.length', count)
}

export const checkEffectsIconsWrap = (userType: TPersonTypes, count?: number) => {
  effectsIconsWrap(userType).should('have.length', count)

  if (count === 0) {
    return
  }

  effectsIconsScrollWrap(userType).should('have.length', count)
}

export const checkEffectBackground = ({ userType, effectName, ID }: ICheckEffectBackground) => {
  effectWrap(userType, ID).should('have.length', 1)
  effectBottomLayer(userType, effectName, ID).should('have.length', 1)
  effectTopLayer(userType, effectName, ID).should('have.length', 1)

  checkStyles({
    elemNode: effectBottomLayer(userType, effectName, ID),
    expectations: {
      width: '418px',
      height: '425px'
    }
  })
  checkStyles({
    elemNode: effectTopLayer(userType, effectName, ID),
    expectations: {
      width: '418px',
      height: '425px'
    }
  })
}

export const checkEffectIcon = ({ userType, effectName, effectType, ID }: ICheckEffectIcon) => {
  effectIconContainer(userType, effectType, ID).should('have.length', 1)
  effectIconWrap(userType, effectType, ID).should('have.length', 1)
  effectIcon(userType, effectType, ID).should('have.length', 1)
  effectIconImage(userType, effectType, ID).should('have.length', 1)

  effectIconContainer(userType, effectType, ID).should(
    'have.attr',
    'id',
    firstLetterUpper({ value: effectName, isDisabledMultiUpper: true })
  )

  checkStyles({
    elemNode: effectIconContainer(userType, effectType, ID),
    expectations: {
      width: '40px',
      height: '25px'
    }
  })

  checkStyles({
    elemNode: effectIcon(userType, effectType, ID),
    pseudo: 'after',
    expectations: {
      'z-index': '-1',
      'background-color': 'rgba(178, 45, 0, 0.3)',
      width: '60px',
      height: '7px',
      // top: '12.5px', // this is can be 0px or 12.5px for some reason (CSSStylesheet is mutable)
      left: '15px',
      position: 'absolute',
      transform: 'matrix(1, 0, 0, 1, 0, -3.5)'
    }
  })

  effectIconImage(userType, effectType, ID).should(
    'have.attr',
    'src',
    `/images/v2/attack/effect_icons/${effectName}.svg`
  )
}

export const checkEffect = ({ userType, effectName, effectType, ID }: ICheckEffect) => {
  checkEffectBackground({ userType, effectName, ID })
  checkEffectIcon({ userType, effectName, effectType, ID })
}

export const checkEffects = ({ userType = DEFENDER, effectsList, wrapCount = 1 }: ICheckEffects) => {
  cy.log(`**[START] Check Effects: ${userType}**`)

  checkEffectsWrap(userType, wrapCount)
  checkEffectsIconsWrap(userType, wrapCount)

  if (!effectsList || effectsList.length === 0) {
    return
  }

  effectsList.forEach(({ name, type }, index) => {
    checkEffect({ userType, ID: index, effectName: name, effectType: type })
  })

  cy.log(`**[END] Check Effects: ${userType}**`)
}
