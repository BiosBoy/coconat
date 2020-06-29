import { IGetLoop } from '../interfaces/IUtils'

const getLoop = ({ callback, count = 30 }: IGetLoop) => {
  const loopArr = Array.from(Array(count).keys())

  return cy.wrap(loopArr).each(callback)
}

export default getLoop
