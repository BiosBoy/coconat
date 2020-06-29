import { continues } from '../triggers'

const redirectToLog = () => {
  // finish fight via continue button
  continues()

  cy.url().should('include', 'loader.php?sid=attackLog')
  cy.contains('Attack log')
}

export default redirectToLog
