import getElemCoords from './getCoords'

import { ICheckElemPos, IWithoutParent, IWithParentPosition } from '../interfaces/IUtils'

const normalizeValue = (value: number) => Math.ceil(value)
const isValue = (value: any) => ![undefined, null].includes(value)
const COORDS_ARRURACY = [-1, 0, 1]

const checkCoords = ({ compareValue, topShift, leftShift, leftOffset, topOffset }) => {
  const { left, top } = getElemCoords({ topCoords: topShift, leftCoords: leftShift })

  if (isValue(leftOffset)) {
    if (!compareValue) {
      const coordsDiff = normalizeValue(left) - leftOffset
      const isDiffAllowed = COORDS_ARRURACY.includes(coordsDiff)

      expect(isDiffAllowed, `left coords check: ${leftOffset}`).to.be.true
    } else {
      expect(normalizeValue(left), 'left coords check').equal(leftOffset)
    }
  }

  if (isValue(topOffset)) {
    if (!compareValue) {
      const coordsDiff = normalizeValue(top) - topOffset
      const isDiffAllowed = COORDS_ARRURACY.includes(coordsDiff)

      expect(isDiffAllowed, `top coords check: ${topOffset}`).to.be.true
    } else {
      expect(normalizeValue(top), 'top coords check').equal(topOffset)
    }
  }
}

const globalCheck = ({ nodeElement, topOffset, leftOffset, compareValue }: IWithoutParent) => {
  nodeElement().then((target: HTMLElement) => {
    const { top: topShift, left: leftShift } = target[0].getBoundingClientRect()

    checkCoords({ compareValue, topShift, leftShift, leftOffset, topOffset })
  })
}

const localCheck = ({ parentElement, nodeElement, topOffset, leftOffset, compareValue }: IWithParentPosition) => {
  const getTargetNode = new Promise(resolve => {
    return nodeElement()
      .then(target => resolve(target))
  }).then(res => res)

  const getParentNode = new Promise(resolve => {
    const parent = parentElement || nodeElement

    return parent()
      .then(target => resolve(!parentElement ? [target[0].parentNode] : target))
  }).then(res => res)

  Promise.all([getTargetNode, getParentNode]).then(nodesArr => {
    const [targetNode, parentNode] = nodesArr

    const { top: childTop, left: childLeft } = (targetNode[0] as HTMLElement).getBoundingClientRect()
    const { top: topParent, left: leftParent } = (parentNode[0] as HTMLElement).getBoundingClientRect()

    const topShift = normalizeValue(childTop - topParent)
    const leftShift = normalizeValue(childLeft - leftParent)

    // expect(childTop - topParent).equal(topOffset)
    // expect(childLeft - leftParent).equal(leftOffset)

    // this is the hack in favor to solve the issue: https://github.com/cypress-io/cypress/issues/4742
    cy.wrap(null).should(() => {
      checkCoords({ compareValue, topShift, leftShift, leftOffset, topOffset })
    })
  })
}

const checkPosition = (config: ICheckElemPos) => {
  const {
    withParent = false,
    compareValue = false,
    parentElement = null,
    nodeElement = null,
    topOffset,
    leftOffset
  } = config

  if (!nodeElement) {
    throw new Error('Some error with elements')
  }

  if (withParent) {
    localCheck({ parentElement, nodeElement, topOffset, leftOffset, compareValue })

    return
  }

  globalCheck({ nodeElement, topOffset, leftOffset, compareValue })
}

export default checkPosition
