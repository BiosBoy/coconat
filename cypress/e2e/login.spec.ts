import setCookies from '../helpers/cookies'
import makeLogin from '../helpers/login'

context('Login', () => {
  it('should make a 2FA login', () => {
    setCookies({ type: 'basic' })
    makeLogin({}).full()
  })
  it('should make a basic login', () => {
    setCookies({ type: 'basic' })
    makeLogin({}).basic()
  })
})
