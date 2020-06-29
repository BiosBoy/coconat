import getStyles from '../utils/getStyles'

import { TElementCSS, TPropertiesCSS, TPseudoCSSTypes } from '../interfaces/IUtils'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   debugger
//   return false
// })

// Cypress.on('fail', (err) => {
//   debugger
// })

Cypress.Commands.add(
  'styles',
  {
    prevSubject: 'element'
  },
  (el: TElementCSS, checkData: TPropertiesCSS, pseudo: TPseudoCSSTypes) => {
    return getStyles({ el, properties: checkData, pseudo })
  }
)
