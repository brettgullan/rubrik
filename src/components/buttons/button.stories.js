import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Alpha } from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Buttons/Alpha',
  decorators: [withKnobs],
  component: Alpha,

  parameters: {
    component: Alpha,
    componentSubtitle: 'A Button',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return <Alpha href="/link/to/something">This is a link</Alpha>
}
