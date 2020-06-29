const unquote = (str: string) => {
  const matchPattern = new RegExp('(^")|("$)', 'g')
  const normalizedString = str.replace(matchPattern, '')

  return normalizedString
}

export default unquote
