import {
  IStartFightData,
  IAttackData,
  IAttackWithID,
  ILeaveFightData,
  IEscapeFightData,
  IMugData,
  IHospData
} from '../interfaces/IMocks'

const startFightData: IStartFightData = {
  step: 'startFight',
  user2ID: '1435333'
}

const leaveFightData: ILeaveFightData = {
  step: 'finish',
  fightResult: 'leave'
}

const mugFightData: IMugData = {
  step: 'finish',
  fightResult: 'mug'
}

const hospFightData: IHospData = {
  step: 'finish',
  fightResult: 'hosp'
}

const escapeFightData: IEscapeFightData = {
  step: 'runAway'
}

const attackData: IAttackData = {
  step: 'attack',
  user2ID: '1435333'
}

const mainWeaponData: IAttackWithID = {
  ...attackData,
  user1EquipedItemID: '1'
}

const secondaryWeaponData: IAttackWithID = {
  ...attackData,
  user1EquipedItemID: '2'
}

const meleeWeaponData: IAttackWithID = {
  ...attackData,
  user1EquipedItemID: '0'
}

const tempWeaponData: IAttackWithID = {
  ...attackData,
  user1EquipedItemID: '5'
}

const fistsWeaponData: IAttackWithID = {
  ...attackData,
  user1EquipedItemID: '999'
}

export {
  startFightData,
  leaveFightData,
  mugFightData,
  hospFightData,
  escapeFightData,
  mainWeaponData,
  secondaryWeaponData,
  meleeWeaponData,
  tempWeaponData,
  fistsWeaponData
}
