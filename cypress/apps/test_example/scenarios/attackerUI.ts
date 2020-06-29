import { checkEffects } from '../view/behavior/effects'
import { checkHeader } from '../view/behavior/header'
import { checkFacilities } from '../view/behavior/facilities'
import { checkModalOverlay } from '../view/behavior/modal'
import { checkStealthBar } from '../view/behavior/stealthbar'

import initiateE2ETest from '../../../services/initiateE2ETest'
import subscribeAPI from '../api'

import { ATTACKER, MALE, MALE_SHORT } from '../constants'
import { checkModel } from '../view/behavior/model'
import { checkArmour } from '../view/behavior/armour'
import { checkStatusBar } from '../view/behavior/statusbar'
import { checkWeaponBoxes } from '../view/behavior/weapons'

const attackerUI = (isInit?: boolean) => {
  isInit && initiateE2ETest({
    runAPI: subscribeAPI,
    url: `/loader.php?sid=attack&user2ID=${Cypress.env('DEFENDER_ID')}`
  })

  // checking attacker overlay
  checkModalOverlay({ userType: ATTACKER })

  // checking header
  checkHeader({ type: ATTACKER, name: 'maryan060', health: '250 / 250' })

  // checking stealthBar
  checkStealthBar({ height: '385px' })

  // checking model
  checkModel({ type: ATTACKER, gender: MALE })

  // checking armour
  checkArmour({
    type: ATTACKER,
    itemsList: [
      { itemID: 842 },
      { itemID: 841, maskID: 'head-top' },
      { itemID: 843, maskID: 'duster', isBackground: true }
    ],
    shortGender: MALE_SHORT
  })

  // checking effects
  checkEffects({
    userType: ATTACKER,
    effectsList: [],
    wrapCount: 0
  })

  // checking bottom indicator facilities block
  checkFacilities({
    userType: ATTACKER,
    strength: {
      isArrow: false,
      color: 'grey',
      count: 1,
      value: '+ 0%',
      label: 'strength'
    },
    speed: {
      isArrow: false,
      color: 'grey',
      value: '+ 0%',
      label: 'speed'
    },
    dexterity: {
      isArrow: false,
      color: 'grey',
      value: '+ 0%',
      label: 'dexterity'
    },
    defence: {
      isArrow: false,
      color: 'grey',
      value: '+ 0%',
      label: 'defence'
    }
  })

  // checking bottom statusBar
  checkWeaponBoxes({
    userType: ATTACKER,
    weaponsData: {
      main: {
        damage: '66.22',
        patrons: '30/30 (2)',
        accuracy: '44.42'
      },
      secondary: {
        damage: '45.08',
        patrons: '15/15 (2)',
        accuracy: '59.30'
      },
      melee: {
        damage: '60.62',
        accuracy: '45.87'
      }
    }
  })

  // checking bottom statusBar
  checkStatusBar({ userType: ATTACKER })
}

export default attackerUI
