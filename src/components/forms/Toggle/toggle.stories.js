import React from 'react'
import {
  withKnobs,
  number,
  optionsKnob as options,
} from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import Toggle from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Toggle',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return <Toggle />
}
