const fixFetch = () => {
  return ({
    onBeforeLoad(win: any) {
      delete win.fetch
    }
  })
}

export default fixFetch
