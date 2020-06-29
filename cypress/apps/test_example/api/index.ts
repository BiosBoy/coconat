import { RIVAL_ID } from '../constants'

const subscribeAPI = () => {
  const rivalID = Cypress.env('DEFENDER_ID') || RIVAL_ID

  cy.route('POST', '/loader.php?sid=attackData&mode=json').as('action')
  cy.route('GET', `/loader.php?sid=attackData&mode=json&user2ID=${rivalID}`).as('init')
  cy.route('GET', `/loader.php?sid=attackData&mode=json&step=poll&user2ID=${rivalID}`).as('poll')
}

export default subscribeAPI
