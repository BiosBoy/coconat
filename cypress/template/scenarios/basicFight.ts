// import { runFight, shouldAttack } from '../modules'
// import { leave } from '../controller'
// import { checkStealthBar, checkDefenderLifeBar, checkDefenderEffects } from '../view/behavior'
// import { MAIN_WEAPON, TEMP_WEAPON, SECONDARY_WEAPON, FISTS_WEAPON } from '../constants'

// const basicFight = () => {
//   // start fight
//    runFight({ withFocus: false })

//    checkStealthBar()
//    checkDefenderLifeBar('463px')
//    checkDefenderEffects({ wrap: 0, count: 0 })

//    // attack with temp
//    onAttack(MAIN_WEAPON)

//    // check temp effect
//    onAttack(TEMP_WEAPON)
//    checkDefenderEffects({ count: 1 })

//    // attack with second gun
//    onAttack(SECONDARY_WEAPON)

//    // regular attack
//    shouldAttack({ weaponType: FISTS_WEAPON, attackCount: 30 })

//    // finish fight via leave defender on the street
//    onLeave()
//    checkDefenderLifeBar('0px')
// }

// export default basicFight
