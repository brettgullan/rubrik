import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../../../theme/src/storybook'

// ----------------------------------------------------------------------------

import FullBleed from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/FullBleed',
  component: FullBleed,
  decorators: [withKnobs],

  parameters: {
    component: FullBleed,
    componentSubtitle: 'Adds a full-width background to another component.',
  },
}

// ----------------------------------------------------------------------------

export const Default = () => {
  return (
    <FullBleed>
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
    </FullBleed>
  )
}
