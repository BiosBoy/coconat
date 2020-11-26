import React from 'react'
import { select, boolean, text } from '@storybook/addon-knobs'

import Body, { IBody } from './'

export const Default = () => {
  const config: IBody = {
    backgroundColor: select('Select background color', ['red', 'black', 'transparent'], 'transparent'),
    withLabel: boolean('Activate Label:', false),
    labelText: text('Set Label text:', ''),
    imageToShow: select('Set current image btw 1 or 2:', [1, 2], 1),
    switchImage: (imgNumber: number) => console.log('CALLBACK FIRED', imgNumber)
  }

  return <Body {...config} />
}

export default {
  title: 'Button'
}
