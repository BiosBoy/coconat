export interface IGetSyncInterval {
  callback: () => void
  iterCount?: number
  delay?: number
}

export interface IWithoutParent {
  nodeElement: any
  topOffset: number
  leftOffset: number
  compareValue?: boolean
}

export interface IWithParentPosition {
  parentElement: any
  nodeElement: any
  topOffset: number
  leftOffset: number
  compareValue?: boolean
}

export interface IGetLoop {
  callback: () => void
  count?: number
}

export type TPseudoCSSTypes = 'before' | 'after'

export interface ICheckElemPos {
  nodeElement: any
  withParent?: boolean
  compareValue?: boolean
  parentElement?: any
  topOffset?: number
  leftOffset?: number
}

// export interface IPropertiesList {
//   styles: string | string[]
//   pseudo: TPseudoCSSTypes
// }

export type TElementCSS = HTMLElement
export type TPropertiesCSS = string | string[]
export interface IExpectations {
  [x: string]: string
}

export interface IGetStyles {
  el: TElementCSS
  properties: TPropertiesCSS
  pseudo?: TPseudoCSSTypes
}

export interface ICheckStyles {
  elemNode: Cypress.Chainable<JQuery<HTMLElement>>
  expectations: IExpectations
  pseudo?: TPseudoCSSTypes
}
