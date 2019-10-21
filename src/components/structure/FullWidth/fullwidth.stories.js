import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../theme/storybook'

// ----------------------------------------------------------------------------

import FullWidth from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/FullWidth',
  component: FullWidth,
  decorators: [withKnobs],

  parameters: {
    component: FullWidth,
    componentSubtitle:
      'Forces a Component to occupy the full width of the viewport',
  },
}

// ----------------------------------------------------------------------------

export const Default = () => (
  <FullWidth>
    <Text
      variant="paragon"
      color="white.0"
      bg={options('Color', colors, colors.Grey, {
        display: 'select',
      })}
      p={4}
      mx="auto"
      maxWidth="50%"
    >
      This text box has a full-bleed background.
    </Text>
  </FullWidth>
)
