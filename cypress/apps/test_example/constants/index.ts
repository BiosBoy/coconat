import { TWeaponsType } from '../interfaces/IModules'
import { TPersonTypes } from '../interfaces/IController'
import { TGenderTypes, TGenderShortTypes } from '../interfaces/IView'

export const RIVAL_ID = '1435333'
export const RIVAL_NAME = 'toshykazu'

export const MAIN_WEAPON: TWeaponsType = 'mainWeapon'
export const SECONDARY_WEAPON: TWeaponsType = 'secondaryWeapon'
export const MELEE_WEAPON: TWeaponsType = 'meleeWeapon'
export const TEMP_WEAPON: TWeaponsType = 'tempWeapon'
export const FISTS_WEAPON: TWeaponsType = 'fistsWeapon'

export const ATTACKER: TPersonTypes = 'attacker'
export const DEFENDER: TPersonTypes = 'defender'

export const MALE: TGenderTypes = 'male'
export const FEMALE: TGenderTypes = 'female'
export const MALE_SHORT: TGenderShortTypes = 'm'
export const FEMALE_SHORT: TGenderShortTypes = 'f'

export const SHORT_GENDERS = {
  m: MALE_SHORT,
  f: FEMALE_SHORT
}

export const FULL_GENDERS = {
  m: MALE,
  f: FEMALE
}
