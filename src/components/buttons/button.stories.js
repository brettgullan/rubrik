import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Box, Flex } from 'rebass'
import { Alpha, Beta } from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Buttons',
  decorators: [withKnobs],
  component: Alpha,

  parameters: {
    component: Alpha,
    componentSubtitle: 'A Button',
  },
}

// ----------------------------------------------------------------------------

const sizes = ['xl', 'lg', 'md', 'sm', 'xs']

const colors = {
  Primary: 'primary',
  Accent: 'accent',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Subtle: 'subtle',
}

// ----------------------------------------------------------------------------

export const AlphaButton = () => {
  const color = options('Color', colors, 'primary', {
    display: 'select',
  })

  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => {
        return (
          <Box p={3}>
            <Alpha key={i} size={size} color={color} href="/link/to/something">
              This is a link
            </Alpha>
          </Box>
        )
      })}
    </Flex>
  )
}

AlphaButton.story = {
  name: 'Alpha',
}

// ----------------------------------------------------------------------------

export const BetaButton = () => {
  const color = options('Color', colors, 'primary', {
    display: 'select',
  })

  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => {
        return (
          <Box p={3}>
            <Beta key={i} size={size} color={color} href="/link/to/something">
              This is a link
            </Beta>
          </Box>
        )
      })}
    </Flex>
  )
}

BetaButton.story = {
  name: 'Beta',
}
