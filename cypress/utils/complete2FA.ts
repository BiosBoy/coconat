import getToken from './getToken'

const complete2FA = () => {
  cy.get('#verify-code-input').then(() => cy.get('#verify-code-input').type(getToken()))
  cy.get('button[type="submit"][class="btn"]').eq(1).click()
}

export default complete2FA
