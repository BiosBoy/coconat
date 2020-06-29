import { facilitiesWrap, facilityContainer, facilityArrow, facilityValue, facilityLabel } from '../selectors/facilities'

import { TPersonTypes } from '../../interfaces/IController'
import { ICheckFacilities, ICheckFacility, TFacilities } from '../../interfaces/IView'
import { COLORS } from '../constants'
import checkStyles from '../../../../utils/checkStyles'

const getNodes = (userType: TPersonTypes, label?: TFacilities) => ({
  facilitiesContainer: () => facilitiesWrap(userType),
  containerNode: () => facilityContainer({ userType, facility: label }),
  arrowNode: () => facilityArrow({ userType, facility: label }),
  valueNode: () => facilityValue({ userType, facility: label }),
  labelNode: () => facilityLabel({ userType, facility: label })
})

export const checkFacilitiesWrap = (userType: TPersonTypes, count = 1) => {
  const { facilitiesContainer } = getNodes(userType)

  facilitiesContainer().should('have.length', count)
  facilitiesContainer().styles('height').should('eq', '32px')

  // cy.wrap(null).should(() => {
  //   container.should('have.css', 'bottom', '31px')
  // })

  // disabled because of inconvenient while testing coords
  // checkPosition({ nodeElement: facilitiesContainer, leftOffset: 113, topOffset: 587 })
}

export const checkFacility = ({ userType, facilityProps }: ICheckFacility) => {
  const { isArrow, color, count, value, label } = facilityProps

  const textColor = COLORS[color]
  const tempCount = count ?? 1

  const { containerNode, arrowNode, valueNode, labelNode } = getNodes(userType, label)

  containerNode().should('have.length', tempCount)
  arrowNode().should('have.length', tempCount)
  valueNode().should('have.length', tempCount)
  labelNode().should('have.length', tempCount)

  valueNode().should('have.text', value)
  labelNode().should('have.text', label)

  valueNode().styles('color').should('eq', textColor)
  labelNode().styles('color').should('eq', textColor)

  checkStyles({
    elemNode: containerNode(),
    expectations: {
      top: '0px',
      left: '0px'
    }
  })
}

export const checkFacilities = (config: ICheckFacilities) => {
  const { isDisabled, userType, wrapCount = 1, strength, speed, dexterity, defence } = config

  cy.log(`**[START] Check Facilities: ${userType}**`)

  if (isDisabled) {
    return
  }

  checkFacilitiesWrap(userType, wrapCount)

  checkFacility({ userType, facilityProps: strength })

  checkFacility({ userType, facilityProps: speed })

  checkFacility({ userType, facilityProps: dexterity })

  checkFacility({ userType, facilityProps: defence })

  cy.log(`**[END] Check Facilities: ${userType}**`)
}
