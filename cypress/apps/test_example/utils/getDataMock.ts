const getDataMock = ({ dataMock, noUser2ID }: { dataMock: object; noUser2ID?: boolean }) => {
  if (!Cypress.env('DEFENDER_ID') || noUser2ID) {
    return dataMock
  }

  return {
    ...dataMock,
    user2ID: Cypress.env('DEFENDER_ID')
  }
}

export default getDataMock
