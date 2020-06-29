const getResponseData = async (payload: Blob) => {
  let json = null

  try {
    const rawData = await payload.text()

    json = await JSON.parse(rawData)
  } catch (e) {
    console.error('Something wrong with ResponseData: ', json)
  }

  return json
}

export default getResponseData
