import checkPosition from '../../../../utils/checkPosition'

import {
  userName,
  hitsIcon,
  hitsCount,
  damageIcon,
  damageCount,
  healthIcon,
  healthCount,
  lifeBar
} from '../selectors/header'

import { ICheckHeader, ICheckHits, ICheckDamage, ICheckHealth } from '../../interfaces/IView'
import { TPersonTypes } from '../../interfaces/IController'

import { HEADER_COORDS } from '../constants/coords'
import checkStyles from '../../../../utils/checkStyles'

export const checkName = ({ userType, userName: userNameData }: { userType: TPersonTypes; userName: string }) => {
  cy.log(`**Check Name: ${userType}**`)

  const nameNode = () => userName(userType)

  nameNode().should('have.length', 1)
  nameNode().should('have.text', userNameData)

  checkPosition({ nodeElement: nameNode, ...HEADER_COORDS[userType].userName })
}

export const checkHits = ({ userType, hits }: ICheckHits) => {
  cy.log(`**Check Hits: ${userType}**`)

  const hitsIconNode = () => hitsIcon(userType)
  const hitsCountNode = () => hitsCount(userType)

  hitsIconNode().should('have.length', 1)
  hitsCountNode().should('have.text', hits)

  checkPosition({ nodeElement: hitsIconNode, ...HEADER_COORDS[userType].hitsIcon })
  checkPosition({ nodeElement: hitsCountNode, ...HEADER_COORDS[userType].hitsCount })
}

export const checkDamage = ({ userType, damage }: ICheckDamage) => {
  cy.log(`**Check Damage: ${userType}**`)

  const damageIconNode = () => damageIcon(userType)
  const damageCountNode = () => damageCount(userType)

  damageIconNode().should('have.length', 1)
  damageCountNode().should('have.text', damage)

  checkPosition({ nodeElement: damageIconNode, ...HEADER_COORDS[userType].damageIcon })
  checkPosition({ nodeElement: damageCountNode, ...HEADER_COORDS[userType].damageCount })
}

export const checkHealth = ({ userType, health }: ICheckHealth) => {
  cy.log(`**Check Health: ${userType}**`)

  const healthIconNode = () => healthIcon(userType)
  const healthCountNode = () => healthCount(userType)

  healthIconNode().should('have.length', 1)
  healthCountNode().should('have.text', health)

  checkPosition({ nodeElement: healthIconNode, ...HEADER_COORDS[userType].healthIcon })
  checkPosition({ nodeElement: healthCountNode, ...HEADER_COORDS[userType].healthCount })
}

export const checkLifeBar = ({ userType, width }: { userType: TPersonTypes; width: string }) => {
  cy.log(`**Check LifeBar: ${userType}**`)

  const lifeBarNode = () => lifeBar(userType)

  lifeBarNode().should('have.length', 1)
  checkStyles({
    elemNode: lifeBarNode(),
    expectations: {
      width: width,
      'background-image': 'linear-gradient(rgb(107, 132, 218), rgb(68, 74, 208))'
    }
  })

  checkPosition({ nodeElement: lifeBarNode, ...HEADER_COORDS[userType].lifeBar })
}

export const checkHeader = (config: ICheckHeader) => {
  const { type, name, hits = '0', damage = '0', health, lifeWidth = '463px' } = config

  cy.log(`**[START] Check Header: ${type}**`)

  checkName({ userType: type, userName: name })
  checkHits({ userType: type, hits })
  checkDamage({ userType: type, damage })
  checkHealth({ userType: type, health })
  checkLifeBar({ userType: type, width: lifeWidth })

  cy.log(`**[END] Check Header: ${type}**`)
}
