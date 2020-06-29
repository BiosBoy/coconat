import { TPersonTypes } from '../../interfaces/IController'
import { IFacilities } from '../../interfaces/IView'

export const facilitiesWrap = (type: TPersonTypes) => cy.get(`#${type} [class^="indicatorsContainer"]`)

export const facilityContainer = ({ userType, facility }: IFacilities) => facilitiesWrap(userType).find(`[id^="${userType}_${facility}"]`)
export const facilityArrow = ({ userType, facility }: IFacilities) => facilitiesWrap(userType).find(`[id^="${userType}_${facility}"] [class^="arrow"]`)
export const facilityValue = ({ userType, facility }: IFacilities) => facilitiesWrap(userType).find(`[id^="${userType}_${facility}"] [class^="value"]`)
export const facilityLabel = ({ userType, facility }: IFacilities) => facilitiesWrap(userType).find(`[id^="${userType}_${facility}"] [class^="title"]`)
