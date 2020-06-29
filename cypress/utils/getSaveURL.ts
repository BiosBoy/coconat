import { BASIC_AUTH, BASE_ROOT } from '../constants/login'

const getSaveUrl = (url: string) => {
  return `https://${BASIC_AUTH}@${BASE_ROOT}${url}`
}

export default getSaveUrl
