import { modalWrap, modalTitle, modalContainer, modalBox, modalButtonsWrap } from '../selectors/modal'
import { start, leave, mug, hosp, continues } from '../selectors/common'

import getModalTitle from '../../utils/getModalTitle'
import checkPosition from '../../../../utils/checkPosition'

import { ATTACKER } from '../../constants'
import { MODAL_ATTACKER_BCG, MODAL_DEFENDER_BCG } from '../constants'
import { MODAL_COORDS } from '../constants/coords'

import { IModalOverlay, ICheckModalBox, TActionButtons } from '../../interfaces/IView'
import { TPersonTypes } from '../../interfaces/IController'

export const checkWrap = (userType: TPersonTypes, isDisabled: boolean) => {
  const modalWrapNode = () => modalWrap(userType)

  if (isDisabled) {
    modalWrapNode().should('have.length', 0)

    return
  }

  const { wrap: wrapCoords } = MODAL_COORDS[userType]
  const modalBcg = userType === ATTACKER ? MODAL_ATTACKER_BCG : MODAL_DEFENDER_BCG

  modalWrapNode().should('have.length', 1)
  modalWrapNode().styles('background-image').should('eq', modalBcg)

  checkPosition({ nodeElement: modalWrapNode, ...wrapCoords })
}

export const checkOptions = () => {
  leave().should('have.length', 1)
  mug().should('have.length', 1)
  hosp().should('have.length', 1)
}

export const checkActions = (type: TActionButtons) => {
  const actionButtons = {
    continue: continues,
    start: start
  }

  const buttonToAction = actionButtons[type]

  if (!buttonToAction) {
    return
  }

  buttonToAction().should('have.length', 1)
}

export const checkModalBox = (config: ICheckModalBox) => {
  const { userType, type, colorType, withName, withOptions, actionButton } = config

  modalContainer(userType).should('have.length', 1)
  modalBox(userType, colorType).should('have.length', 1)
  modalTitle(userType, colorType).should('have.length', 1)
  modalButtonsWrap(userType, colorType).should('have.length', 1)

  if (withOptions) {
    checkOptions()

    return
  }

  type && modalTitle(userType, colorType).should('have.text', getModalTitle({ type, removeName: !withName }))

  checkActions(actionButton)
}

export const checkModalOverlay = (config: IModalOverlay) => {
  const { isDisabled, userType, type, colorType, withName, withOptions, actionButton } = config

  cy.log(`**[START] Check Overlay: ${userType}**`)

  checkWrap(userType, isDisabled)

  if (userType === ATTACKER || isDisabled) {
    return
  }

  checkModalBox({ userType, type, colorType, withName, withOptions, actionButton })

  cy.log(`**[END] Check Overlay: ${userType}**`)
}
