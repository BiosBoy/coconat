import checkPosition from '../../../../utils/checkPosition'

import { stealthBar, stealthBarIcon } from '../selectors/stealthBar'

import { ICheckStealthBar } from '../../interfaces/IView'
import checkStyles from '../../../../utils/checkStyles'

export const checkStealthBar = (config: ICheckStealthBar) => {
  cy.log('**Check StealthBar: attacker**')

  const { height = '385px' } = config

  stealthBar().should('have.length', 1)
  stealthBarIcon().should('have.length', 1)

  checkStyles({
    elemNode: stealthBar(),
    expectations: {
      width: '2px',
      height: height,
    }
  })

  // this is only displayed on attacker model we don't need
  checkPosition({ nodeElement: stealthBar, leftOffset: 123, topOffset: 174 })
  checkPosition({ nodeElement: stealthBarIcon, leftOffset: 117, topOffset: 564 })
}
