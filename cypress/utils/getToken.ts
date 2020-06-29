const totp = require('totp-generator')

const getToken = () => {
  const token = totp('YNHALH32YJ7HSZLM')

  return token
}

export default getToken
