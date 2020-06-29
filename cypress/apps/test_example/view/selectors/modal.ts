import { TPersonTypes } from '../../interfaces/IController'
import { ATTACKER } from '../../constants'
import { TModalColors } from '../../interfaces/IView'

export const modalWrap = (userType: TPersonTypes) => {
  const isAttacker = userType === ATTACKER
  const transBG = isAttacker ? '[class*="transBg"]' : ''

  return cy.get(`#${userType} [class^="modal"]${transBG}`)
}

export const modalContainer = (userType: TPersonTypes) => modalWrap(userType).find('[class^="dialog_"]')
export const modalBox = (userType: TPersonTypes, type: TModalColors) => modalContainer(userType).find(`[class^="colored"]${type ? `[class*="${type}]` : ''}`)
export const modalTitle = (userType: TPersonTypes, type: TModalColors) => modalBox(userType, type).find('[class^="title"]')
export const modalButtonsWrap = (userType: TPersonTypes, type: TModalColors) => modalBox(userType, type).find('[class^="dialogButtons"]')
