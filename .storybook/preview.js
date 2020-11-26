import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import { withMobileMode } from './addons'

import { BACKGROUNDS } from './constants'

import './styles/reset.css'
import './styles/storybook.scss'

export const parameters = {
  backgrounds: {
    default: 'grey',
    values: BACKGROUNDS
  }
}

export const decorators = [withKnobs, withMobileMode, centered]
