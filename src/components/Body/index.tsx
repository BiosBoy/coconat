import React, { memo } from 'react'

import './index.scss'

const Body = memo(() => {
  return <div>Hello World!</div>
})

Body.displayName = 'Body'

export default Body
