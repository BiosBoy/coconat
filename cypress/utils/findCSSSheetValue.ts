import unquote from './unquote'

const findCSSSheetValue = (elementCSSData: CSSStyleDeclaration, propKey: string) => {
  const value = elementCSSData.getPropertyValue(propKey)

  return unquote(value)
}

export default findCSSSheetValue
