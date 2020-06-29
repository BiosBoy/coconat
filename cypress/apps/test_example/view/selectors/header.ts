import { TPersonTypes } from '../../interfaces/IController'

export const headerWrap = (userType: TPersonTypes) => cy.get(`#${userType} [class^="boxTitle"][class*="header"]`)

export const userName = (userType: TPersonTypes) => headerWrap(userType).find('[class^="userName"]')
export const hitsIcon = (userType: TPersonTypes) => headerWrap(userType).find('[class^="iconHits"]')
export const hitsCount = (userType: TPersonTypes) => headerWrap(userType).find('span[id^="player-hits"]')
export const damageIcon = (userType: TPersonTypes) => headerWrap(userType).find('[class^="iconDamage"]')
export const damageCount = (userType: TPersonTypes) => headerWrap(userType).find('span[id^="player-damage"]')
export const healthIcon = (userType: TPersonTypes) => headerWrap(userType).find('[class^="iconHealth"]')
export const healthCount = (userType: TPersonTypes) => headerWrap(userType).find('span[id^="player-health"]')
export const lifeBar = (userType: TPersonTypes) => headerWrap(userType).find('[class^="progress"]')
