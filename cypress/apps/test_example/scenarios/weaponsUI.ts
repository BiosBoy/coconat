import { checkWeaponBoxes } from '../view/behavior/weapons'

import initiateE2ETest from '../../../services/initiateE2ETest'
import subscribeAPI from '../api'

import { TPersonTypes } from '../interfaces/IController'

const weaponsUI = ({ userType }: { userType: TPersonTypes }) => {
  initiateE2ETest({
    runAPI: subscribeAPI,
    url: `/loader.php?sid=attack&user2ID=${Cypress.env('DEFENDER_ID')}`
  })

  // checking weapons boxes
  checkWeaponBoxes({ userType })
}

export default weaponsUI
