import { TPersonTypes } from '../../interfaces/IController'
import { TWeaponTypes } from '../../interfaces/IView'

export const mainWeapon = (userType: TPersonTypes) => cy.get(`#${userType} #weapon_main`)
export const secondaryWeapon = (userType: TPersonTypes) => cy.get(`#${userType} #weapon_second`)
export const meleeWeapon = (userType: TPersonTypes) => cy.get(`#${userType} #weapon_melee`)
export const tempWeapon = (userType: TPersonTypes) => cy.get(`#${userType} #weapon_temp`)
export const fistsWeapon = (userType: TPersonTypes) => cy.get(`#${userType} #weapon_fists`)
export const bootsWeapon = (userType: TPersonTypes) => cy.get(`#${userType} #weapon_boots`)

export const weaponTopWrap = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  cy.get(`#${userType} #weapon_${weaponType} [class^="top_"]`)
)

export const weaponImageWrap = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  cy.get(`#${userType} #weapon_${weaponType} [class^="weaponImage"]`)
)

export const weaponBottomWrap = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  cy.get(`#${userType} #weapon_${weaponType} [class^="bottom_"]`)
)

export const weaponTopWrapPropsLeft = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrap(userType, weaponType).find('[class^="props"]').eq(0)
)

export const weaponTopWrapPropsLeftIconFirst = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrapPropsLeft(userType, weaponType).find('[class^="bonus"]').eq(0)
)

export const weaponTopWrapPropsLeftIconLast = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrapPropsLeft(userType, weaponType).find('[class^="bonus"]').eq(1)
)

export const weaponTopWrapLabel = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrap(userType, weaponType).find('[id^="label"]')
)

export const weaponTopWrapPropsRight = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrap(userType, weaponType).find('[class^="props"]').eq(1)
)

export const weaponTopWrapPropsRightIconFirst = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrapPropsRight(userType, weaponType).find('[class^="bonus"]').eq(0)
)

export const weaponTopWrapPropsRightIconLast = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponTopWrapPropsRight(userType, weaponType).find('[class^="bonus"]').eq(1)
)

export const weaponImage = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponImageWrap(userType, weaponType).find('img')
)

export const weaponBottomWrapPropsLeft = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrap(userType, weaponType).find('[class^="props"]').eq(0)
)

export const weaponBottomWrapPropsLeftIcon = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrapPropsLeft(userType, weaponType).find('[class^="bonus-attachment"]')
)

export const weaponBottomWrapPropsLeftDamage = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrapPropsLeft(userType, weaponType).find('[id^="damage-value"]')
)

export const weaponBottomWrapLabelWrap = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrap(userType, weaponType).find('[class^="bottomMarker"]')
)

export const weaponBottomWrapLabel = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrapLabelWrap(userType, weaponType).find('span')
)

export const weaponBottomWrapLabelEternity = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrapLabelWrap(userType, weaponType).find('span[class^="eternity"]')
)

export const weaponBottomWrapPropsRight = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrap(userType, weaponType).find('[class^="props"]').eq(1)
)

export const weaponBottomWrapPropsRightIcon = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrapPropsRight(userType, weaponType).find('i[class^="bonus-attachment"]')
)

export const weaponBottomWrapPropsRightDamage = (userType: TPersonTypes, weaponType: TWeaponTypes) => (
  weaponBottomWrapPropsRight(userType, weaponType).find('span[id^="accuracy"]')
)
