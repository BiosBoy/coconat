import { ICheckStyles } from '../interfaces/IUtils'

/**
 *
 *  @example
 *    // Basic invoke
 *    checkStyles({
 *      elemNode,
 *      pseudo: 'after',
 *      expectations: {
 *        width: '40px',
 *        height: '25px'
 *      }
 *    })
 *
 *  @param config - object with core values
 *  @param config.elemNode - elemNode to process on
 *  @param config.pseudo - "after" or "before" values for deep checking
 *  @param config.expectations - a list of key-value CSS pair to check
 *
 *  @example
 *    // Alternative ways to use, native:
 *    elemNode.should('have.css', 'width', '418px') // native
 *    elemNode.styles('height').should('eq', '425px') // our custom
 *
 */
const checkStyles = ({ elemNode, pseudo, expectations }: ICheckStyles) => {
  const styleKeysToCheck = Object.keys(expectations)
  const invokeStyles = elemNode.styles(styleKeysToCheck, pseudo)

  const checkValues = (cssData: object) => styleKeysToCheck.forEach((key: string) => {
    expect(cssData[key]).equal(expectations[key])
  })

  // use with decorator to log some events in Cypress
  // browser's window (this is the hack for its own bug)
  const checkWithLog = (callback: Function, data: object) => {
    const pseudoInfo = pseudo ? ` pseudo: "::${pseudo}"` : ''

    cy
      .log(`**[START] checking styles...${pseudoInfo}**`)
      .then(() => callback(data))
      .log('**[END] checking styles done.**')
  }

  invokeStyles.then((resp: object) => checkWithLog(checkValues, resp))
}

export default checkStyles
