import { TModalTypes } from './IModules'
import { TPersonTypes } from './IController'

export interface IModal {
  type: TModalTypes
  withoutDefenderName?: boolean
  withOptions?: boolean
}

export type TEffectColors = 'red' | 'green'

export interface ICheckEffects {
  userType: TPersonTypes
  wrapCount?: number
  effectsList: {
    name: string
    type: TEffectColors
  }[]
}

export interface ICheckEffect {
  userType: TPersonTypes
  effectName: string
  effectType: TEffectColors
  ID: number
  count?: number
}

export interface ICheckEffectBackground {
  userType: TPersonTypes
  effectName: string
  ID: number
  count?: number
}

export interface ICheckEffectIcon extends ICheckEffect {}

export interface ICheckStealthBar {
  height?: string
}

export interface ICheckHeader {
  type: TPersonTypes
  name: string
  hits?: string
  damage?: string
  health: string
  lifeWidth?: string
}

export interface ICheckHits {
  userType: TPersonTypes
  hits?: string
}

export interface ICheckDamage {
  userType: TPersonTypes
  damage?: string
}

export interface ICheckHealth {
  userType: TPersonTypes
  health: string
}

export type TFacilities = 'strength' | 'speed' | 'dexterity' | 'defence'

export interface IFacilities {
  userType: TPersonTypes
  facility: TFacilities
}


export interface ICoords {
  leftOffset: number
  topOffset: number
}

export interface IFacilityProp {
  isArrow: boolean
  color: 'green' | 'grey' | 'red'
  count?: number
  value: string
  label: TFacilities
}

export interface ICheckFacilities {
  isDisabled?: boolean
  userType: TPersonTypes
  wrapCount?: number
  strength?: IFacilityProp
  speed?: IFacilityProp
  dexterity?: IFacilityProp
  defence?: IFacilityProp
}

export interface ICheckFacility {
  userType: TPersonTypes
  facilityProps: IFacilityProp
}

export type TDimensionTypes = 'regular' | 'slim' | 'paired'

export type TWeaponTypes = 'main' | 'second' | 'melee' | 'temp' | 'fists' | 'boots'

export interface IWeaponData {
  damage?: string
  patrons?: string
  accuracy?: string
  disableBottomBlock?: boolean
}

export interface IWeaponsData {
  main: IWeaponData
  secondary: IWeaponData
  melee: IWeaponData
}

export interface IWeaponImageCoords {
  leftOffsetWrap?: number
  topOffsetWrap?: number
  leftOffsetNode?: number
  topOffsetNode?: number
}

export interface IWeaponImage {
  ID: number
  userType: TPersonTypes
  weaponType: TWeaponTypes
  customShiftWrap?: number
  customShiftImage?: number
}

export interface IWeaponTopSection {
  ID: number
  userType: TPersonTypes
  weaponType: TWeaponTypes
  label?: 'Primary' | 'Secondary' | 'Melee' | 'Temporary'
  disableAttachments?: boolean
  disableBlock?: boolean
  forceDisabled?: boolean
  customShiftWrap?: number
  customShiftLabel?: number
}

export interface IWeaponBottomSection {
  ID: number
  userType: TPersonTypes
  weaponType: TWeaponTypes
  label?: string
  damage?: string
  accuracy?: string
  disableBlock?: boolean
  forceDisabled?: boolean
}

export type TGenderTypes = 'male' | 'female'
export type TGenderShortTypes = 'm' | 'f'

export interface ICheckModel {
  type: TPersonTypes
  gender: TGenderTypes
}

export interface IArmorItem {
  itemID: number
  maskID?: string
  isBackground?: boolean
}

export interface ICheckArmours {
  type: TPersonTypes
  itemsList: IArmorItem[]
  shortGender: TGenderShortTypes
}

export interface ICheckArmour {
  userType: TPersonTypes
  itemsList: IArmorItem[]
  shortGender: TGenderShortTypes
}

export interface ICheckArmourBlock {
  ID: number
  itemID: number
  userType: TPersonTypes
  shortGender: TGenderShortTypes
}

export interface ICheckMaskBlock {
  ID: number
  maskID: string
  userType: TPersonTypes
  shortGender: TGenderShortTypes
}

export interface ICheckBackgroundBlock {
  ID: number
  itemID: number
  isBackground: boolean
  userType: TPersonTypes
  shortGender: TGenderShortTypes
}

export interface ICheckStatusBar {
  userType: TPersonTypes
}

export type TModalColors = 'red' | ''
export type TActionButtons = 'start' | 'continue' | ''

export interface IModalOverlay {
  type?: TModalTypes
  isDisabled?: boolean
  userType: TPersonTypes
  colorType?: TModalColors
  actionButton?: TActionButtons
  withName?: boolean
  withOptions?: boolean
}

export interface ICheckModalBox {
  type: TModalTypes
  userType: TPersonTypes
  colorType: TModalColors
  actionButton: TActionButtons
  withName: boolean
  withOptions: boolean
}
