const getElemCoords = ({ topCoords, leftCoords }: any): any => {
  const { body, documentElement: docElem } = document || {}

  const scrollTop = window?.pageYOffset || docElem?.scrollTop || body?.scrollTop
  const scrollLeft = window?.pageXOffset || docElem?.scrollLeft || body?.scrollLeft

  const clientTop = docElem?.clientTop || body?.clientTop || 0
  const clientLeft = docElem?.clientLeft || body?.clientLeft || 0

  const top = topCoords + scrollTop - clientTop
  const left = leftCoords + scrollLeft - clientLeft

  return {
    top,
    left
  }
}

export default getElemCoords
