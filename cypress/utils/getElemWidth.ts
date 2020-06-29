const getElemWidth = (elem: any) => {
  const { width } = window.getComputedStyle(elem)

  return Number(width.substr(0, width.length - 2))
}

export default getElemWidth
