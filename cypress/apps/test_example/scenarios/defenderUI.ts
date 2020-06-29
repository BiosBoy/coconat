import { checkEffects } from '../view/behavior/effects'
import { checkHeader } from '../view/behavior/header'
import { checkFacilities } from '../view/behavior/facilities'
import { checkModalOverlay } from '../view/behavior/modal'

import initiateE2ETest from '../../../services/initiateE2ETest'
import subscribeAPI from '../api'

import { MALE, MALE_SHORT, DEFENDER } from '../constants'
import { checkModel } from '../view/behavior/model'
import { checkArmour } from '../view/behavior/armour'
import { checkStatusBar } from '../view/behavior/statusbar'
import { checkWeaponBoxes } from '../view/behavior/weapons'

const defenderUI = (isInit?: boolean) => {
  isInit && initiateE2ETest({
    runAPI: subscribeAPI,
    url: `/loader.php?sid=attack&user2ID=${Cypress.env('DEFENDER_ID')}`
  })

  // checking overlay
  checkModalOverlay({ userType: DEFENDER, colorType: '' })

  // checking header
  checkHeader({ type: DEFENDER, name: Cypress.env('DEFENDER_NAME'), health: '625 / 625' })

  // checking model
  checkModel({ type: DEFENDER, gender: MALE })

  // checking armour
  checkArmour({
    type: DEFENDER,
    itemsList: [],
    shortGender: MALE_SHORT
  })

  // checking effects
  checkEffects({
    userType: DEFENDER,
    effectsList: [],
    wrapCount: 0
  })

  // checking bottom indicator facilities block
  checkFacilities({
    userType: DEFENDER,
    isDisabled: true
  })

  // checking bottom statusBar
  checkWeaponBoxes({
    userType: DEFENDER,
    weaponsData: {
      main: {
        disableBottomBlock: true
      },
      secondary: {
        disableBottomBlock: true
      },
      melee: {
        disableBottomBlock: true
      }
    }
  })

  // checking bottom statusBar
  checkStatusBar({ userType: DEFENDER })
}

export default defenderUI
