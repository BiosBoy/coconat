import { TPersonTypes } from '../../interfaces/IController'


export const playersWrap = () => cy.get('[class^="players"]')

export const modelWrap = (userType: TPersonTypes) => cy.get(`#${userType} [class^="modelWrap"]`)
export const modelLayers = (type: TPersonTypes) => modelWrap(type).find('[class^="modelLayers"]')
export const modelContainer = (type: TPersonTypes) => modelLayers(type).find('[class^="model"]')
export const modelImage = (type: TPersonTypes) => modelContainer(type).find('img')
