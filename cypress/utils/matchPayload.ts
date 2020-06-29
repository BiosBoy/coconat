import getRequestData, { TFormData } from './getRequestData'

const matchPayloadData = ({ bodyData, mockData }: { bodyData: TFormData; mockData: object }) => {
  const requestData = getRequestData(bodyData as TFormData)

  expect(requestData).eql(mockData)
}

export default matchPayloadData
