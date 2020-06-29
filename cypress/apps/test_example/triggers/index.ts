import { common, weapons } from '../view/selectors'
import { ATTACKER } from '../constants'

// native triggers
export const windowFocus = () => cy.window().trigger('focus')

// common triggers
export const start = () => common.start().click()
export const leave = () => common.leave().click()
export const mug = () => common.mug().click()
export const hosp = () => common.hosp().click()
export const escape = () => common.escape().click()
export const continues = () => common.continues().click()

// attacker weapon triggers
export const mainWeapon = () => weapons.mainWeapon(ATTACKER).click()
export const secondaryWeapon = () => weapons.secondaryWeapon(ATTACKER).click()
export const meleeWeapon = () => weapons.meleeWeapon(ATTACKER).click()
export const tempWeapon = () => weapons.tempWeapon(ATTACKER).click()
export const fistsWeapon = () => weapons.fistsWeapon(ATTACKER).click()
