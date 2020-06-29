import { IGetSyncInterval } from '../interfaces/IUtils'

const getSyncInterval = ({ callback, iterCount = 30, delay = 1000 }: IGetSyncInterval) => {
  cy.clock()

  const iterationCountArray = Array.from(Array(iterCount).keys())

  return ({ isClear = false }) => iterationCountArray.forEach(() => {
    if (isClear) {
      return
    }

    cy.tick(delay).then(callback)
  })
}

export default getSyncInterval
