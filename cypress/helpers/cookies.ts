const setCookies = ({ type }: { type?: 'basic' | 'full' }) => {
  cy.setCookie('rfc_id', '5e4958c36ae92')
  cy.setCookie('rfc_v', '5e4958c36ae92')

  if (type === 'full') {
    cy.setCookie('MUIDB', '226533C53ED0665A285B3DB73F1B67B8')
    cy.setCookie('MUID', '226533C53ED0665A285B3DB73F1B67B8')
    cy.setCookie('_uetsid', '_uetd8273680-7fd3-26ca-86e3-f3332e3317ee')
    cy.setCookie('uid', '2114355')
    cy.setCookie('at95b2278b6336bf6c96c827532981cc09', 'ca1d8c8426dca99624b79f4306d55860')
    cy.setCookie('MR2', '0')
    cy.setCookie('PHPSESSID', '902c198318f82ada9ffc5e373aee347a')
    cy.setCookie('__cfduid', 'd665319e0675d6939dfea07ca6dabdb601587613695')
    cy.setCookie('sso_wiki_user', 'svyat770')
    cy.setCookie('_gid', 'GA1.2.1616290244.1587615425')
    cy.setCookie('_gcl_au', '1.1.439557684.1587615425')
    cy.setCookie('MR', '0')
    cy.setCookie('secret', '5ea11001e6afb2.07976791')
    cy.setCookie('_ga', 'GA1.2.235348367.1587615425')
  }
}

export default setCookies
