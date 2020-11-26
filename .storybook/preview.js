import centered from '@storybook/addon-centered/react'
import { withKnobs } from '@storybook/addon-knobs'

import { BACKGROUNDS } from './constants'

export const parameters = {
  backgrounds: {
    default: 'grey',
    values: BACKGROUNDS
  }
}

export const decorators = [withKnobs, centered]
