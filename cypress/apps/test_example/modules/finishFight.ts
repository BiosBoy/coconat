import redirectToLog from './redirectToLog'

import { checkModalOverlay } from '../view/behavior/modal'

import { IFinishFight } from '../interfaces/IModules'
import { DEFENDER } from '../constants'
import { onWin } from '../controller'

const finishFight = ({ type, withOptions, withoutDefenderName }: IFinishFight) => {
  // finish fight via continue
  checkModalOverlay({
    userType: DEFENDER,
    type,
    withOptions,
    actionButton: !withOptions ? 'continue' : ''
  })

  // in case we have option before finish the fight
  if (withOptions) {
    onWin({ type })
      .then(() => {
        checkModalOverlay({
          userType: DEFENDER,
          type,
          withName: !withoutDefenderName,
          actionButton: 'continue'
        })

        // redirect to the log page
        redirectToLog()
      })

    return
  }

  // redirect to the log page
  redirectToLog()
}

export default finishFight
