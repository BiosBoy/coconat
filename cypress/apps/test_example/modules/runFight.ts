import initiateE2ETest from '../../../services/initiateE2ETest'

import subscribeAPI from '../api'
import { onInit, onFocus, onPoll, onStart } from '../controller'

import { RIVAL_ID } from '../constants'
import { IRunFight } from '../interfaces/IModules'

const runFight = ({ withFocus = false, rivalID = null }: IRunFight) => {
  initiateE2ETest({
    runAPI: subscribeAPI,
    url: `/loader.php?sid=attack&user2ID=${rivalID || Cypress.env('DEFENDER_ID') || RIVAL_ID}`
  })

  // initial load data
  onInit()

  // focus should fire
  withFocus && onFocus()

  // poll should running
  onPoll()

  // staring fight
  onStart()
}

export default runFight
