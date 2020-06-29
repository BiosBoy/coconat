import { TPersonTypes } from '../../interfaces/IController'
import { TEffectColors } from '../../interfaces/IView'

export const effectsWrap = (userType: TPersonTypes) => cy.get(`#${userType} [class^="effectsWrap"]`)
export const effectsIconsWrap = (userType: TPersonTypes) => cy.get(`#${userType} [class^="iconsContainer"]`)

export const effectWrap = (userType: TPersonTypes, ID: number) => effectsWrap(userType).find('[class^="effectWrap"]').eq(ID)
export const effectBottomLayer = (userType: TPersonTypes, effectName: string, ID: number) => effectWrap(userType, ID).find(`[class*="bottomLayer"][class*="${effectName}"]`)
export const effectTopLayer = (userType: TPersonTypes, effectName: string, ID: number) => effectWrap(userType, ID).find(`[class*="topLayer"][class*="${effectName}"]`)

export const effectsIconsScrollWrap = (userType: TPersonTypes) => effectsIconsWrap(userType).find('[class^="scrollIconsWrap"][class*="scrollRight"]')
export const effectIconWrap = (userType: TPersonTypes, effectType: TEffectColors, ID: number) => effectsIconsScrollWrap(userType).find(`[class^="iconWrap"][class*="${effectType}"]`).eq(ID)
export const effectIconContainer = (userType: TPersonTypes, effectType: TEffectColors, ID: number) => effectIconWrap(userType, effectType, ID).find('[class^="iconContainer"]')
export const effectIcon = (userType: TPersonTypes, effectType: TEffectColors, ID: number) => effectIconContainer(userType, effectType, ID).find('[class^="svgIconWrap"][class*="effect"]')
export const effectIconImage = (userType: TPersonTypes, effectType: TEffectColors, ID: number) => effectIcon(userType, effectType, ID).find('img')
