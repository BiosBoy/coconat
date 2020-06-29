import { TPseudoCSSTypes } from '../interfaces/IUtils'

const getCSSStylesheet = (el: HTMLElement, pseudo?: TPseudoCSSTypes) => {
  const { defaultView: cssStylesheet } = el[0].ownerDocument
  const CSSSheet = cssStylesheet.getComputedStyle(el[0], pseudo)

  return CSSSheet
}

export default getCSSStylesheet
