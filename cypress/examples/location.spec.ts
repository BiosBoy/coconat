context('Location', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/location')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).equal('')
      expect(location.href).equal('https://example.cypress.io/commands/location')
      expect(location.host).equal('example.cypress.io')
      expect(location.hostname).equal('example.cypress.io')
      expect(location.origin).equal('https://example.cypress.io')
      expect(location.pathname).equal('/commands/location')
      expect(location.port).equal('')
      expect(location.protocol).equal('https:')
      expect(location.search).equal('')
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'https://example.cypress.io/commands/location')
  })
})
