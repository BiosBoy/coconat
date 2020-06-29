import getCSSStylesheet from './getCSSStylesheet'
import findCSSSheetValue from './findCSSSheetValue'

import { IGetStyles, IExpectations } from '../interfaces/IUtils'

const getStyles = ({ el, properties, pseudo }: IGetStyles) => {
  const elementCSSData = getCSSStylesheet(el, pseudo)

  if (Array.isArray(properties)) {
    const propsObject: IExpectations = {};

    (properties as string[]).forEach((propKey: string) => {
      propsObject[propKey] = findCSSSheetValue(elementCSSData, propKey)
    })

    return propsObject
  }

  return findCSSSheetValue(elementCSSData, (properties as string))
}

export default getStyles
