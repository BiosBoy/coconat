export type TWeaponsType = 'mainWeapon' | 'secondaryWeapon' | 'meleeWeapon' | 'tempWeapon' | 'fistsWeapon'

export interface IShouldAttack {
  weaponType?: TWeaponsType
  attackCount?: number
}

export interface IRunFight {
  withFocus?: boolean
  rivalID?: number
}

export type TModalTypes = 'stalemated' | 'escape' | 'leave' | 'mug' | 'hosp' | 'continues'

export interface IModal {
  type?: TModalTypes
  withOptions?: boolean
}

export interface IFinishFight {
  type?: TModalTypes
  withOptions?: boolean
  withoutDefenderName?: boolean
}
