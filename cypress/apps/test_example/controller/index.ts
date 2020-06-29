import getResponseData from '../../../utils/getResponseData'
import getRequestData, { TFormData } from '../../../utils/getRequestData'

import * as triggers from '../triggers'
import * as dataMocks from '../mocks'
import getDataMock from '../utils/getDataMock'
import { IStartFightData, IAttackWithID } from '../interfaces/IMocks'
import { TModalTypes, TWeaponsType } from '../interfaces/IModules'

const { start, windowFocus, escape } = triggers

export const onInit = () => {
  cy.wait('@init').then(
    () => cy.log('**INIT IS FIRED**.')
  )
}

export const onStart = () => {
  start().wait('@action')
    .then(response => {
      const { body } = response.request
      const requestData = getRequestData(body as TFormData) as IStartFightData

      cy.log(`**ATTACK STARTED. REQUEST PAYLOAD:** ${JSON.stringify(requestData)}`)
        .then(() => assert.deepEqual(requestData, getDataMock({ dataMock: dataMocks.startFightData })))
    })
}

export const onFocus = () => {
  windowFocus().wait('@init')
    .then(
      () => cy.log('**FOCUS IS FIRED**.')
    )
}

export const onPoll = () => {
  cy.wait('@poll')
    .then(
      () => cy.log('**POLL IS STARTED**.')
    )
}

export const onAttack = (buttonType: TWeaponsType) => {
  const weapon = triggers[buttonType]

  return weapon().wait('@action')
    .then(async ({ request, response }) => {
      const { body } = request
      const { body: payload } = response

      const requestData = getRequestData(body as TFormData) as IAttackWithID
      const responseData = await getResponseData(payload as Blob)

      // FIXME: need to be fixed once Cypress make some solution here https://github.com/cypress-io/cypress/issues/5365
      // cy.log(`**ACTION STARTED. WEAPON ID:** ${requestData.user1EquipedItemID}.
      //  **PAYLOAD:** \n ${JSON.stringify(requestData)}`)

      return {
        requestData,
        responseData
      }
    })
}

export const onEscape = () => {
  const mockData = getDataMock({ dataMock: dataMocks.escapeFightData, noUser2ID: true })

  escape().wait('@action')
    .then(async ({ request }) => {
      const { body } = request
      const requestData = getRequestData(body as TFormData)

      cy.log(`**ATTACK FINISHED (ESCAPED)**. \n **PAYLOAD:** ${JSON.stringify(requestData)}`)
        .then(() => assert.deepEqual(requestData, mockData))
    })
}

export const onWin = ({ type }: { type: TModalTypes }) => {
  const win = triggers[type]
  const winMockData = getDataMock({ dataMock: dataMocks[`${type}FightData`], noUser2ID: true })

  return win().wait('@action')
    .then(response => {
      const { body } = response.request
      const requestData = getRequestData(body as TFormData)

      cy.log(`**ATTACK FINISHED (${type})**. \n **PAYLOAD:** ${JSON.stringify(requestData)}`)
        .then(() => assert.deepEqual(requestData, winMockData))
    })
}

// export const onContinue = () => {
//   continues().wait('@continue')
//     .then(({ request }) => {
//       const { body } = request
//       const requestData = getRequestData(body as TFormData)

//       console.log(request, requestData, 'request')

//       cy.log(`**ATTACK FINISHED (CONTINUE)**. \n **PAYLOAD:** ${JSON.stringify(requestData)}`)
//         // .then(() => assert.deepEqual(requestData, dataMocks.continueData))
//     })
// }
