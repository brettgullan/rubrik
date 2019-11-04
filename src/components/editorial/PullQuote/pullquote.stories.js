import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import PullQuote from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Editorial/PullQuote',
  component: PullQuote,
  decorators: [withKnobs],

  parameters: {
    component: PullQuote,
    componentSubtitle: 'A PullQuote component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const props = {
    quote:
      'It took me years to understand that words are often as important as experience, because words make experience last.',
    attribution: 'William Morris',
  }
  return <PullQuote {...props} />
}
Primary.story = {
  name: 'Default',
}

// ----------------------------------------------------------------------------

export const NoAttribution = () => {
  const props = {
    quote:
      'It took me years to understand that words are often as important as experience, because words make experience last.',
  }
  return <PullQuote {...props} />
}

// ----------------------------------------------------------------------------
