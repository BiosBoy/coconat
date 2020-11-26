import makeLogin from '../helpers/login'
import setCookies from '../helpers/cookies'

import { rivalsUI, winFight, stalematedFight, escapedFight } from '../apps/attack/scenarios'

context('Attack App', () => {
  beforeEach(() => {
    setCookies({ type: 'basic' })
    makeLogin({ email: 'mar@gmail.com', password: 'per' }).basic()
  })

  it('check rivals UI', () => {
    Cypress.env('DEFENDER_ID', '1414133')
    Cypress.env('DEFENDER_NAME', 'popandopulo')

    rivalsUI()
  })

  // it('should run basic win fight', () => {
  //   Cypress.env('DEFENDER_ID', '1414133')
  //   Cypress.env('DEFENDER_NAME', 'popandopulo')

  //   winFight({ withFocus: true })
  // })
  // it('should run fight with stalemated result', () => {
  //   Cypress.env('DEFENDER_ID', '595784')
  //   Cypress.env('DEFENDER_NAME', 'AAA')

  //   stalematedFight()
  // })
  // it('should escape after one commit', () => {
  //   Cypress.env('DEFENDER_ID', '1435333')
  //   Cypress.env('DEFENDER_NAME', 'toshykazu')

  //   escapedFight()
  // })
  // it('should win and leave on the street', () => {
  //   Cypress.env('DEFENDER_ID', '1163708')
  //   Cypress.env('DEFENDER_NAME', 'Heather')

  //   winFight({ type: 'leave', withOptions: true })
  // })
  // it('should win and mug', () => {
  //   Cypress.env('DEFENDER_ID', '1163708')
  //   Cypress.env('DEFENDER_NAME', 'Heather')

  //   winFight({ type: 'mug', withOptions: true })
  // })
  // it('should win and hospitalize', () => {
  //   Cypress.env('DEFENDER_ID', '1163708')
  //   Cypress.env('DEFENDER_NAME', 'Heather')

  //   winFight({ type: 'hosp', withOptions: true })
  // })
})
