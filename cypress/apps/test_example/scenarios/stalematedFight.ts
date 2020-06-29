import { onAttack } from '../controller'
import { runFight, shouldAttack, finishFight } from '../modules'
import { checkEffects } from '../view/behavior/effects'
import { MAIN_WEAPON, TEMP_WEAPON, SECONDARY_WEAPON, FISTS_WEAPON, DEFENDER } from '../constants'

const stalematedFight = () => {
  // start fight
  runFight({ rivalID: Cypress.env('DEFENDER_ID'), withFocus: false })

  checkEffects({ userType: DEFENDER, wrapCount: 0, effectsList: [] })

  // attack with temp
  onAttack(MAIN_WEAPON)

  // check temp effect
  onAttack(TEMP_WEAPON)
  checkEffects({
    userType: DEFENDER,
    wrapCount: 1,
    effectsList: [
      {
        name: 'smoked',
        type: 'red'
      }
    ]
  })

  // attack with second gun
  onAttack(SECONDARY_WEAPON)

  // regular attack
  shouldAttack({ weaponType: FISTS_WEAPON, attackCount: 30 })

  // finish fight by continue
  finishFight({ type: 'stalemated', withoutDefenderName: true })
}

export default stalematedFight
