import checkPosition from '../../../../utils/checkPosition'

import {
  armourWrap,
  armourContainer,
  armourImgWrap,
  armourImg,
  armourMaskImgWrap,
  armourMaskImg,
  armourBackgroundImgWrap,
  armourBackgroundImg
} from '../selectors/armour'

import {
  ICheckArmours,
  ICheckArmour,
  ICheckArmourBlock,
  ICheckMaskBlock,
  ICheckBackgroundBlock
} from '../../interfaces/IView'
import { TPersonTypes } from '../../interfaces/IController'

import { SHORT_GENDERS, FULL_GENDERS } from '../../constants'
import { ARMOUR_COORDS } from '../constants/coords'
import checkStyles from '../../../../utils/checkStyles'

export const checkArmoursWrap = ({ userType }: { userType: TPersonTypes }) => {
  const wrap = () => armourWrap(userType)

  checkPosition({ nodeElement: wrap, ...ARMOUR_COORDS[userType].wrap })
}

export const checkArmoursContainer = ({ userType, ID, zIndex }: any) => {
  const container = () => armourContainer(userType).eq(ID)

  container().should('have.length', 1)
  container().should('have.attr', 'style', `z-index: ${zIndex};`)

  checkPosition({ nodeElement: container, ...ARMOUR_COORDS[userType].container })
}

export const checkArmourImage = ({ userType, ID, itemID, shortGender }: ICheckArmourBlock) => {
  const container = () => armourContainer(userType).eq(ID)
  const armor = () => armourImgWrap(userType, null, container)
  const image = () => armourImg(userType, null, armor)

  armor().should('have.length', 1)

  checkStyles({
    elemNode: armor(),
    expectations: {
      position: 'absolute',
      'z-index': '3'
    }
  })

  image().should('have.length', 1)
  image().should('have.attr', 'src', `/getImage.php?ID=${itemID}&gender=${SHORT_GENDERS[shortGender]}`)

  checkStyles({
    elemNode: image(),
    expectations: {
      position: 'relative',
      'z-index': '3',
      'user-select': 'none'
    }
  })

  checkPosition({ nodeElement: armor, ...ARMOUR_COORDS[userType].armour })
  checkPosition({ nodeElement: image, ...ARMOUR_COORDS[userType].image })
}

// eslint-disable-next-line max-statements
export const checkArmourMask = ({ userType, ID, maskID, shortGender }: ICheckMaskBlock) => {
  const container = () => armourContainer(userType).eq(ID)
  const maskWrap = () => armourMaskImgWrap(userType, null, container)
  const mask = () => armourMaskImg(userType, null, maskWrap)

  if (!maskID) {
    maskWrap().should('have.length', 0)

    return
  }

  maskWrap().should('have.length', 1)

  checkStyles({
    elemNode: maskWrap(),
    expectations: {
      position: 'absolute',
      'z-index': '3'
    }
  })

  mask().should('have.length', 1)
  mask().should('have.attr', 'src', `/images/v2/items/masks/${FULL_GENDERS[shortGender]}-${maskID}-mask.png`)

  checkStyles({
    elemNode: mask(),
    expectations: {
      position: 'relative',
      'z-index': '3',
      'user-select': 'none'
    }
  })

  checkPosition({ nodeElement: maskWrap, ...ARMOUR_COORDS[userType].maskWrap })
  checkPosition({ nodeElement: mask, ...ARMOUR_COORDS[userType].mask })
}

// eslint-disable-next-line max-statements
export const checkArmourBackground = ({ userType, ID, itemID, isBackground, shortGender }: ICheckBackgroundBlock) => {
  const container = () => armourContainer(userType).eq(ID)
  const backgroundWrap = () => armourBackgroundImgWrap(userType, null, container)
  const background = () => armourBackgroundImg(userType, null, backgroundWrap)

  if (!isBackground) {
    backgroundWrap().should('have.length', 0)

    return
  }

  backgroundWrap().should('have.length', 1)

  checkStyles({
    elemNode: backgroundWrap(),
    expectations: {
      position: 'absolute',
      'z-index': '0'
    }
  })

  background().should('have.length', 1)
  background().should(
    'have.attr',
    'src',
    `/images/v2/items/backgrounds/${FULL_GENDERS[shortGender]}-${itemID}-background.png`
  )

  checkStyles({
    elemNode: background(),
    expectations: {
      position: 'relative',
      'z-index': '0',
      'user-select': 'none'
    }
  })

  checkPosition({ nodeElement: backgroundWrap, ...ARMOUR_COORDS[userType].backgroundWrap })
  checkPosition({ nodeElement: background, ...ARMOUR_COORDS[userType].background })
}

export const checkArmourBlock = ({ userType, itemsList, shortGender }: ICheckArmour) => {
  const minimalIndex = 10

  if (!itemsList || itemsList.length === 0) {
    return
  }

  itemsList.forEach(({ itemID, maskID, isBackground }, index) => {
    const zIndex = minimalIndex + index

    checkArmoursContainer({ userType, ID: index, zIndex })
    checkArmourImage({ userType, ID: index, itemID, shortGender })
    checkArmourMask({ userType, ID: index, maskID, shortGender })
    checkArmourBackground({ userType, ID: index, itemID, shortGender, isBackground })
  })
}

export const checkArmour = (config: ICheckArmours) => {
  const { type, itemsList, shortGender } = config

  cy.log(`**[START] Check Armour: ${type}**`)

  checkArmoursWrap({ userType: type })
  checkArmourBlock({ userType: type, itemsList, shortGender })

  cy.log(`**[END] Check Armour: ${type}**`)
}
