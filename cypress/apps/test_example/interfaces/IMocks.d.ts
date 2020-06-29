export interface IStartFightData {
  step: 'startFight'
  user2ID: '1435333'
}

export interface ILeaveFightData {
  step: 'finish'
  fightResult: 'leave'
}

export interface IEscapeFightData {
  step: 'runAway'
}

export interface IAttackData {
  step: 'attack'
  user2ID: '1435333'
}

export interface IAttackWithID extends IAttackData {
  user1EquipedItemID: string
}

export interface IMugData {
  step: 'finish'
  fightResult: 'mug'
}

export interface IHospData {
  step: 'finish'
  fightResult: 'hosp'
}
