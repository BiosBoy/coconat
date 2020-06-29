import fixFetch from '../utils/fixFetch'
import getSaveURL from '../utils/getSaveURL'

const visit = (url: string) => {
  cy.visit(getSaveURL(url), fixFetch())
}

export default visit
