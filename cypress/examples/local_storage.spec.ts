context('Local Storage', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/local-storage')
  })
  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('cy.clearLocalStorage() - clear all data in local storage', () => {
    // https://on.cypress.io/clearlocalstorage
    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).equal('red')
      expect(localStorage.getItem('prop2')).equal('blue')
      expect(localStorage.getItem('prop3')).equal('magenta')
    })

    // clearLocalStorage() yields the localStorage object
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem('prop1')).equal(null)
      expect(ls.getItem('prop2')).equal(null)
      expect(ls.getItem('prop3')).equal(null)
    })

    // Clear key matching string in Local Storage
    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).equal('red')
      expect(localStorage.getItem('prop2')).equal('blue')
      expect(localStorage.getItem('prop3')).equal('magenta')
    })

    cy.clearLocalStorage('prop1').should((ls) => {
      expect(ls.getItem('prop1')).equal(null)
      expect(ls.getItem('prop2')).equal('blue')
      expect(ls.getItem('prop3')).equal('magenta')
    })

    // Clear keys matching regex in Local Storage
    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).equal('red')
      expect(localStorage.getItem('prop2')).equal('blue')
      expect(localStorage.getItem('prop3')).equal('magenta')
    })

    cy.clearLocalStorage(/prop1|2/).should((ls) => {
      expect(ls.getItem('prop1')).equal(null)
      expect(ls.getItem('prop2')).equal(null)
      expect(ls.getItem('prop3')).equal('magenta')
    })
  })
})
