import runFight from '../modules/runFight'
import { shouldAttack, finishFight } from '../modules'
import { IWinFight } from '../interfaces/IScenarios'

const winFight = ({ type, withOptions, withFocus }: IWinFight) => {
  // staring fight
  runFight({ withFocus })

  // fight until rival will be beat
  shouldAttack({})

  // finish fight via continue
  finishFight({ type, withOptions })
}

export default winFight
