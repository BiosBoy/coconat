import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';

import Body, { IBody } from './';

export const Default = () => {
  const config: IBody = {
    backgroundColor: select('Select background color', ['red', 'black', 'transparent'], 'transparent'),
    withLabel: boolean('Activate Label:', false),
    labelText: text('Set Label text:', ''),
    imageToShow: 1,
    switchImage: () => {}
  }

  return <Body {...config} />
}

export default {
  title: 'Button'
}
