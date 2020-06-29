import initiateE2ETest from '../../../services/initiateE2ETest'
import subscribeAPI from '../api'

import attackerUI from './attackerUI'
import defenderUI from './defenderUI'

const rivalsUI = () => {
  initiateE2ETest({
    runAPI: subscribeAPI,
    url: `/loader.php?sid=attack&user2ID=${Cypress.env('DEFENDER_ID')}`
  })

  attackerUI()
  defenderUI()
}

export default rivalsUI
