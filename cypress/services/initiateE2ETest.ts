import visit from '../helpers/visit'

const initiateE2ETest = ({ runAPI, url }) => {
  // starting server for API proxy
  cy.server()

  // subscribing on AJAX request
  runAPI()

  // visiting App page
  visit(url)
}

export default initiateE2ETest
