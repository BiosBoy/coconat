import { onAttack } from '../controller'
import * as dataMocks from '../mocks'
import getDataMock from '../utils/getDataMock'

import getSyncInterval from '../../../utils/getSyncInterval'
import { IShouldAttack } from '../interfaces/IModules'

const shouldAttack = ({ weaponType = 'fistsWeapon', attackCount = 30 }: IShouldAttack) => {
  let FIGHT_PROGRESS = null

  const isFightOver = () => FIGHT_PROGRESS === 'end'
  const weaponMockData = getDataMock({ dataMock: dataMocks[`${weaponType}Data`] })

  const commit = () => {
    if (isFightOver()) {
      return
    }

    onAttack(weaponType).then(({ requestData, responseData }) => {
      FIGHT_PROGRESS = responseData.DB.attackStatus

      const weaponIDCheck = `**ACTION FIRED. WEAPON ID:** ${requestData.user1EquipedItemID}.`
      const payloadCheck = `**PAYLOAD:** \n ${JSON.stringify(requestData)}`

      cy.log(`${weaponIDCheck} ${payloadCheck}`).then(() => expect(requestData).eql(weaponMockData))
    })
  }

  const attackWithInterval = getSyncInterval({ callback: commit, iterCount: attackCount })

  attackWithInterval({ isClear: isFightOver() })
}

export default shouldAttack
