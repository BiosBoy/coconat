import { TPersonTypes } from '../../interfaces/IController'

export const statusBarWrap = (userType: TPersonTypes) => cy.get(`#${userType} [class^="statusBarWrap"]`)
export const statusBarIcon = (userType: TPersonTypes) => statusBarWrap(userType).find('[class^="weaponIcon"]')
export const statusBarDesc = (userType: TPersonTypes) => statusBarWrap(userType).find('[class^="result"]')
