import complete2FA from '../utils/complete2FA'

import { ILogin } from '../interfaces/IHelpers'

import { BASIC_AUTH, BASE_ROOT, EMAIL_2FA, PASSWORD_2FA, EMAIL, PASSWORD } from '../constants/login'

const login = ({ email, password }: ILogin) => {
  cy.visit(`https://${BASIC_AUTH}@${BASE_ROOT}/login.php`)

  const basic = () => {
    cy.get('#player').type(email || EMAIL)
    cy.get('#password').type(password || PASSWORD)
    cy.get('.login').click()

    // checking if we're on the Home page
    cy.contains('You have logged on maryan060!')
  }

  const full = () => {
    // making basic login
    cy.get('#player').type(email || EMAIL_2FA)
    cy.get('#password').type(password || PASSWORD_2FA)
    cy.get('.login').click()

    // should be a redirect to authentication screen for 2FA
    // and complete 2FA challenge
    cy.url().should('match', /authenticate.php/)
    complete2FA()

    // checking if we're on the Home page
    cy.contains('Home')
  }

  return {
    basic,
    full
  }
}

export default login
