import { TPersonTypes } from '../../interfaces/IController'

export const armourWrap = (userType: TPersonTypes) => cy.get(`#${userType} [class^="armoursWrap"]`)

export const armourContainer = (type: TPersonTypes) => armourWrap(type).find('[class^="ammour_container"]')

export const armourImgWrap = (type: TPersonTypes, ID: number, node?: any) => {
  if (node) {
    return node().find('[class^="armour"]')
  }

  return armourContainer(type).eq(ID || 0).find('[class^="armour"]')
}

export const armourImg = (type: TPersonTypes, ID: number, node?: any, wrapID?: number) => {
  if (node) {
    return node().find('img')
  }

  return armourImgWrap(type, wrapID).eq(ID || 0).find('img')
}

export const armourMaskImgWrap = (type: TPersonTypes, ID: number, node?: any) => {
  if (node) {
    return node().find('[class^="mask"]')
  }

  return armourContainer(type).eq(ID || 0).find('[class^="mask"]')
}

export const armourMaskImg = (type: TPersonTypes, ID: number, node?: any, wrapID?: number) => {
  if (node) {
    return node().find('img[class^="itemImg"]')
  }

  return armourMaskImgWrap(type, wrapID).eq(ID || 0).find('[class^="itemImg"]')
}

export const armourBackgroundImgWrap = (type: TPersonTypes, ID: number, node?: any) => {
  if (node) {
    return node().find('[class^="background_"]')
  }

  return armourContainer(type).eq(ID || 0).find('[class^="background_"]')
}

export const armourBackgroundImg = (type: TPersonTypes, ID: number, node?: any, wrapID?: number) => {
  if (node) {
    return node().find('img[class^="itemImg"][class*="backgroundImage"]')
  }

  return armourBackgroundImgWrap(type, wrapID)
    .eq(ID || 0)
    .find('[class^="img[class^="itemImg"][class*="backgroundImage"]')
}
