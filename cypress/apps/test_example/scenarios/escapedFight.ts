import runFight from '../modules/runFight'
import { onAttack, onEscape } from '../controller'

import { FISTS_WEAPON } from '../constants'
import { finishFight } from '../modules'

const leaveFight = () => {
  // staring fight
  runFight({})

  // attack the rival
  onAttack(FISTS_WEAPON)

  // escape from the fight
  onEscape()

  // finish fight via continue
  finishFight({ type: 'escape', withoutDefenderName: true })
}

export default leaveFight
