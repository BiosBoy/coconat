import { modalScenarios } from '../mocks/view'
import { IGetModalTitle } from '../interfaces/IUtils'

const getModalTitle = ({ type, removeName }: IGetModalTitle) => {
  const useDefenderName = !removeName ? ` ${Cypress.env('DEFENDER_NAME')}` : ''
  const modalTitle = modalScenarios[type]

  return typeof modalTitle === 'function' ? modalTitle(useDefenderName) : `${modalTitle}${useDefenderName}`
}

export default getModalTitle
