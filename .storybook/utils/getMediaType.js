const getMediaType = (callback) => {
  const clientWidth = document.body && document.body.getBoundingClientRect().width

  if (clientWidth <= 600) {
    callback('mobile')

    return
  }

  if (clientWidth <= 1000) {
    callback('tablet')

    return
  }

  callback('desktop')
}

export default getMediaType
