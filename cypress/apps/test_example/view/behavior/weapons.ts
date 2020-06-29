import checkPosition from '../../../../utils/checkPosition'

import {
  mainWeapon,
  secondaryWeapon,
  meleeWeapon,
  tempWeapon,
  fistsWeapon,
  bootsWeapon,
  weaponTopWrap,
  weaponTopWrapPropsLeftIconFirst,
  weaponTopWrapPropsLeftIconLast,
  weaponTopWrapLabel,
  weaponTopWrapPropsRightIconFirst,
  weaponTopWrapPropsRightIconLast,
  weaponImageWrap,
  weaponImage,
  weaponBottomWrap,
  weaponBottomWrapPropsLeftIcon,
  weaponBottomWrapPropsLeftDamage,
  weaponBottomWrapLabel,
  weaponBottomWrapLabelWrap,
  weaponBottomWrapPropsRightIcon,
  weaponBottomWrapPropsRightDamage,
  weaponBottomWrapLabelEternity
} from '../selectors/weapons'

import {
  TDimensionTypes,
  IWeaponBottomSection,
  IWeaponTopSection,
  IWeaponImage,
  IWeaponData,
  IWeaponsData
} from '../../interfaces/IView'
import { TPersonTypes } from '../../interfaces/IController'

import { WEAPON_BOX_DIMENSIONS } from '../constants'
import { WEAPON_COORDS } from '../constants/coords'
import checkStyles from '../../../../utils/checkStyles'

const amplifierOffset = ({ value, rowID, customShift = 0 }: { value: number; rowID: number; customShift?: number }) => {
  const updatedValue = value + (rowID * 97)

  // this is a hack for testing fists and boots weapons
  if (rowID === 4) {
    return updatedValue - 15 + customShift
  }

  return updatedValue + customShift
}

const checkWeaponBoxStyles = (node: any, dimType?: TDimensionTypes) => {
  const { width, height } = WEAPON_BOX_DIMENSIONS[dimType] || WEAPON_BOX_DIMENSIONS['regular']

  checkStyles({
    elemNode: node(),
    expectations: {
      width: width,
      height: height
    }
  })
}

export const checkWeaponTopSection = (config: IWeaponTopSection) => {
  const {
    ID,
    userType,
    weaponType,
    label,
    disableAttachments,
    disableBlock,
    forceDisabled,
    customShiftWrap,
    customShiftLabel
  } = config

  const weaponTopWrapNode = () => weaponTopWrap(userType, weaponType)

  if (forceDisabled) {
    weaponTopWrapNode().should('have.length', 0)

    return
  }

  const wrap = () => {
    weaponTopWrapNode().should('have.length', 1)
    weaponTopWrapNode().styles('width').should('eq', '155px')

    checkPosition({
      
      nodeElement: weaponTopWrapNode,
      leftOffset: WEAPON_COORDS[userType].topWrap.leftOffset,
      topOffset: amplifierOffset({
        value: WEAPON_COORDS[userType].topWrap.topOffset,
        rowID: ID,
        customShift: customShiftWrap
      })
    })
  }

  const leftSection = () => {
    const weaponTopWrapPropsLeftIconFirstNode = () => weaponTopWrapPropsLeftIconFirst(userType, weaponType)
    const weaponTopWrapPropsLeftIconLastNode = () => weaponTopWrapPropsLeftIconLast(userType, weaponType)

    weaponTopWrapPropsLeftIconFirstNode().should('have.length', 1)
    checkStyles({
      elemNode: weaponTopWrapPropsLeftIconFirstNode(),
      expectations: {
        width: '11px',
        height: '11px'
      }
    })

    weaponTopWrapPropsLeftIconLastNode().should('have.length', 1)
    checkStyles({
      elemNode: weaponTopWrapPropsLeftIconLastNode(),
      expectations: {
        width: '11px',
        height: '11px'
      }
    })

    checkPosition({
      
      nodeElement: weaponTopWrapPropsLeftIconFirstNode,
      leftOffset: WEAPON_COORDS[userType].topWrapLeftIconFirst.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].topWrapLeftIconLast.topOffset, rowID: ID })
    })

    checkPosition({
      
      nodeElement: weaponTopWrapPropsLeftIconLastNode,
      leftOffset: WEAPON_COORDS[userType].topWrapLeftIconLast.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].topWrapLeftIconLast.topOffset, rowID: ID })
    })
  }

  const labelSection = () => {
    const weaponTopWrapLabelNode = () => weaponTopWrapLabel(userType, weaponType)

    weaponTopWrapLabelNode().should('have.length', 1)
    weaponTopWrapLabelNode().should('have.text', label)

    checkStyles({
      elemNode: weaponTopWrapLabelNode(),
      expectations: {
        width: '64px',
        height: '16px',
        'background-color': 'rgb(255, 255, 255)',
        'border-top-left-radius': '0px',
        'border-top-right-radius': '0px',
        'border-bottom-right-radius': '5px',
        'border-bottom-left-radius': '5px'
      }
    })

    // if (userType === 'attacker' && ID === 3) {
    //   console.log(WEAPON_COORDS[userType].topLabel.topOffset, 'WEAPON_COORDS[userType].topLabel.topOffset')
    //   console.log(amplifierOffset({ value: WEAPON_COORDS[userType].topLabel.topOffset, rowID: ID }), 'AMPLIFIED!')
    // }

    checkPosition({
      
      nodeElement: weaponTopWrapLabelNode,
      leftOffset: WEAPON_COORDS[userType].topLabel.leftOffset
      // topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].topLabel.topOffset, rowID: ID, customShift: customShiftLabel })
    })
  }

  const rightSection = () => {
    const weaponTopWrapPropsRightIconFirstNode = () => weaponTopWrapPropsRightIconFirst(userType, weaponType)
    const weaponTopWrapPropsRightIconLastNode = () => weaponTopWrapPropsRightIconLast(userType, weaponType)

    weaponTopWrapPropsRightIconFirstNode().should('have.length', 1)
    checkStyles({
      elemNode: weaponTopWrapPropsRightIconFirstNode(),
      expectations: {
        width: '11px',
        height: '11px'
      }
    })

    weaponTopWrapPropsRightIconLastNode().should('have.length', 1)
    checkStyles({
      elemNode: weaponTopWrapPropsRightIconLastNode(),
      expectations: {
        width: '11px',
        height: '11px'
      }
    })

    checkPosition({
      
      nodeElement: weaponTopWrapPropsRightIconFirstNode,
      leftOffset: WEAPON_COORDS[userType].topWrapRightIconFirst.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].topWrapRightIconFirst.topOffset, rowID: ID })
    })

    checkPosition({
      
      nodeElement: weaponTopWrapPropsRightIconLastNode,
      leftOffset: WEAPON_COORDS[userType].topWrapRightIconLast.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].topWrapRightIconLast.topOffset, rowID: ID })
    })
  }

  !disableBlock && wrap();
  (!disableBlock && !disableAttachments) && leftSection()
  !disableBlock && labelSection();
  (!disableBlock && !disableAttachments) && rightSection()
}

export const checkWeaponImage = ({ ID, userType, weaponType, customShiftWrap, customShiftImage }: IWeaponImage) => {
  const weaponImageWrapNode = () => weaponImageWrap(userType, weaponType)
  const weaponImageNode = () => weaponImage(userType, weaponType)

  weaponImageWrapNode().should('have.length', 1)
  weaponImageNode().should('have.length', 1)

  checkPosition({
    
    nodeElement: weaponImageWrapNode,
    leftOffset: WEAPON_COORDS[userType].weaponImageWrap.leftOffset,
    topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].weaponImageWrap.topOffset, rowID: ID, customShift: customShiftWrap })
  })

  checkPosition({
    
    nodeElement: weaponImageNode,
    leftOffset: WEAPON_COORDS[userType].weaponImage.leftOffset,
    topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].weaponImage.topOffset, rowID: ID, customShift: customShiftImage })
  })
}

export const checkWeaponBottomSection = (config: IWeaponBottomSection) => {
  const { ID, userType, weaponType, label, damage, accuracy, disableBlock, forceDisabled } = config

  const weaponBottomWrapNode = () => weaponBottomWrap(userType, weaponType)

  if (forceDisabled) {
    weaponBottomWrapNode().should('have.length', 0)

    return
  }

  const wrap = () => {
    weaponBottomWrapNode().should('have.length', 1)

    checkStyles({
      elemNode: weaponBottomWrapNode(),
      expectations: {
        width: '155px',
        height: '12px'
      }
    })

    checkPosition({
      
      nodeElement: weaponBottomWrapNode,
      leftOffset: WEAPON_COORDS[userType].bottomWrap.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].bottomWrap.topOffset, rowID: ID })
    })
  }

  const leftSection = () => {
    const weaponBottomWrapPropsLeftIconFirstNode = () => weaponBottomWrapPropsLeftIcon(userType, weaponType)
    const weaponBottomWrapPropsLeftIconLastNode = () => weaponBottomWrapPropsLeftDamage(userType, weaponType)

    weaponBottomWrapPropsLeftIconFirstNode().should('have.length', 1)
    checkStyles({
      elemNode: weaponBottomWrapPropsLeftIconFirstNode(),
      expectations: {
        width: '11px',
        height: '11px'
      }
    })

    weaponBottomWrapPropsLeftIconLastNode().should('have.length', 1)
    weaponBottomWrapPropsLeftIconLastNode().should('have.text', damage)

    checkPosition({
      
      nodeElement: weaponBottomWrapPropsLeftIconFirstNode,
      leftOffset: WEAPON_COORDS[userType].bottomWrapLeftIcon.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].bottomWrapLeftIcon.topOffset, rowID: ID })
    })
    checkPosition({
      
      nodeElement: weaponBottomWrapPropsLeftIconLastNode,
      leftOffset: WEAPON_COORDS[userType].bottomWrapLeftIconValue.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].bottomWrapLeftIconValue.topOffset, rowID: ID })
    })
  }

  const labelSection = () => {
    const weaponBottomWrapLabelWrapNode = () => weaponBottomWrapLabelWrap(userType, weaponType)
    const weaponBottomWrapLabelNode = () => weaponBottomWrapLabel(userType, weaponType)
    const weaponBottomWrapLabelEternityNode = () => weaponBottomWrapLabelEternity(userType, weaponType)

    weaponBottomWrapLabelWrapNode().should('have.length', 1)
    weaponBottomWrapLabelNode().should('have.length', 1)

    checkStyles({
      elemNode: weaponBottomWrapLabelWrapNode(),
      expectations: {
        width: '64px',
        height: '16px',
        'background-color': 'rgb(255, 255, 255)',
        'border-top-left-radius': '5px',
        'border-top-right-radius': '5px',
        'border-bottom-right-radius': '0px',
        'border-bottom-left-radius': '0px'
      }
    })

    if (label === 'infinity') {
      weaponBottomWrapLabelEternityNode().should('have.length', 1)
    } else {
      weaponBottomWrapLabelNode().should('have.text', label)
    }

    checkPosition({
      
      nodeElement: weaponBottomWrapLabelWrapNode,
      leftOffset: WEAPON_COORDS[userType].bottomLabel.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].bottomLabel.topOffset, rowID: ID })
    })
  }

  const rightSection = () => {
    const weaponBottomWrapPropsRightIconNode = () => weaponBottomWrapPropsRightIcon(userType, weaponType)
    const weaponBottomWrapPropsRightDamageNode = () => weaponBottomWrapPropsRightDamage(userType, weaponType)

    weaponBottomWrapPropsRightIconNode().should('have.length', 1)
    checkStyles({
      elemNode: weaponBottomWrapPropsRightIconNode(),
      expectations: {
        width: '11px',
        height: '11px'
      }
    })

    weaponBottomWrapPropsRightDamageNode().should('have.length', 1)
    weaponBottomWrapPropsRightDamageNode().should('have.text', accuracy)

    checkPosition({
      
      nodeElement: weaponBottomWrapPropsRightIconNode,
      leftOffset: WEAPON_COORDS[userType].bottomWrapRightIcon.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].bottomWrapRightIcon.topOffset, rowID: ID })
    })

    checkPosition({
      
      nodeElement: weaponBottomWrapPropsRightDamageNode,
      leftOffset: WEAPON_COORDS[userType].bottomWrapRightIconValue.leftOffset,
      topOffset: amplifierOffset({ value: WEAPON_COORDS[userType].bottomWrapRightIconValue.topOffset, rowID: ID })
    })
  }

  !disableBlock && wrap();
  (!disableBlock && damage) && leftSection()
  !disableBlock && labelSection();
  (!disableBlock && accuracy) && rightSection()
}

export const checkMainWeapon = (ID: number, userType: TPersonTypes, weaponData: IWeaponData) => {
  const weaponNode = () => mainWeapon(userType)

  weaponNode().should('have.length', 1)

  checkWeaponBoxStyles(weaponNode)
  checkWeaponTopSection({ ID, userType, weaponType: 'main', label: 'Primary' })
  checkWeaponImage({ ID, userType, weaponType: 'main' })
  checkWeaponBottomSection({
    ID,
    userType,
    weaponType: 'main',
    disableBlock: weaponData.disableBottomBlock,
    damage: weaponData.damage,
    label: weaponData.patrons,
    accuracy: weaponData.accuracy
  })
}

export const checkSecondaryWeapon = (ID: number, userType: TPersonTypes, weaponData: IWeaponData) => {
  const weaponNode = () => secondaryWeapon(userType)

  weaponNode().should('have.length', 1)

  checkWeaponBoxStyles(weaponNode)
  checkWeaponTopSection({ ID, userType, weaponType: 'second', label: 'Secondary' })
  checkWeaponImage({ ID, userType, weaponType: 'second' })
  checkWeaponBottomSection({
    ID,
    userType,
    weaponType: 'second',
    damage: weaponData.damage,
    label: weaponData.patrons,
    accuracy: weaponData.accuracy,
    disableBlock: weaponData.disableBottomBlock
  })
}

export const checkMeleeWeapon = (ID: number, userType: TPersonTypes, weaponData: IWeaponData) => {
  const weaponNode = () => meleeWeapon(userType)

  weaponNode().should('have.length', 1)

  checkWeaponBoxStyles(weaponNode)
  checkWeaponTopSection({ ID, userType, weaponType: 'melee', label: 'Melee' })
  checkWeaponImage({ ID, userType, weaponType: 'melee' })
  checkWeaponBottomSection({
    ID,
    userType,
    weaponType: 'melee',
    label: 'infinity',
    damage: weaponData.damage,
    accuracy: weaponData.accuracy,
    disableBlock: weaponData.disableBottomBlock
  })
}

export const checkTempWeapon = (ID: number, userType: TPersonTypes) => {
  const weaponNode = () => tempWeapon(userType)

  weaponNode().should('have.length', 1)

  checkWeaponBoxStyles(weaponNode)
  checkWeaponTopSection({ ID, userType, weaponType: 'temp', label: 'Temporary', disableAttachments: true })
  checkWeaponImage({ ID, userType, weaponType: 'temp' })
  checkWeaponBottomSection({ ID, userType, weaponType: 'temp', disableBlock: true })
}

export const checkFistsWeapon = (ID: number, userType: TPersonTypes) => {
  const weaponNode = () => fistsWeapon(userType)

  weaponNode().should('have.length', 1)

  checkWeaponBoxStyles(weaponNode, 'slim')
  checkWeaponTopSection({ ID, userType, weaponType: 'fists', forceDisabled: true })
  checkWeaponImage({ ID, userType, weaponType: 'fists', customShiftWrap: 1, customShiftImage: 1 })
  checkWeaponBottomSection({ ID, userType, weaponType: 'fists', forceDisabled: true })
}

export const checkBootsWeapon = (ID: number, userType: TPersonTypes, isActive?: boolean) => {
  const weaponNode = () => bootsWeapon(userType)

  weaponNode().should('have.length', !isActive ? 0 : 1)

  if (!isActive) {
    return
  }

  checkWeaponBoxStyles(weaponNode, 'slim')
  checkWeaponTopSection({ ID, userType, weaponType: 'fists', forceDisabled: true })
  checkWeaponImage({ ID, userType, weaponType: 'fists' })
  checkWeaponBottomSection({ ID, userType, weaponType: 'fists', forceDisabled: true })
}

export const checkWeaponBoxes = ({ userType, weaponsData }: { userType: TPersonTypes; weaponsData?: IWeaponsData }) => {
  cy.log(`**[START] Check Weapons: ${userType}**`)

  checkMainWeapon(0, userType, weaponsData.main)
  checkSecondaryWeapon(1, userType, weaponsData.secondary)
  checkMeleeWeapon(2, userType, weaponsData.melee)
  checkTempWeapon(3, userType)
  checkFistsWeapon(4, userType)
  checkBootsWeapon(5, userType, false) // temporary disabled

  cy.log(`**[END] Check Weapons: ${userType}**`)
}
