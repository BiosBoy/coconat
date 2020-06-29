export type TFormData = object[]

const getRequestData = (formData: TFormData) => {
  const requestData = {}

  try {
    formData.forEach((value, key) => {
      requestData[key] = value
    })
  } catch (e) {
    console.error('Something wrong with FormData: ', formData)
  }

  return requestData
}

export default getRequestData
