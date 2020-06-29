/// <reference types="cypress" />

declare namespace Cypress {
  // eslint-disable-next-line
  interface Chainable<Subject> {
    getByDataTest(tag: string): Chainable<any>
    styles(checkData: string | string[], pseudo?: 'after' | 'before'): Chainable<any>
  }
}
