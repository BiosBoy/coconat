// Adds an ability to set custom styles for the body node.
const withCustomStyles = (customStyles: string) => (story: Function) => {
  document.body.setAttribute('style', customStyles)

  return story()
}

export default withCustomStyles
