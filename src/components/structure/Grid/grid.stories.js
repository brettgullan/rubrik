import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../theme/storybook'

// ----------------------------------------------------------------------------

import Grid from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Grid',
  component: Grid,
  decorators: [withKnobs],

  parameters: {
    component: Grid,
    componentSubtitle: 'A simple, responsive Flex grid component.',
  },
}

// ----------------------------------------------------------------------------

export const Default = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns="3" gutter="20px">
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        1
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        2
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        3
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        4
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        5
      </Text>
    </Grid>
  )
}

// ----------------------------------------------------------------------------

export const VariableColumns = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns="3" gutter="20px">
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        1
      </Text>
      <Text span={2} color="white.0" variant="paragon" p={3} bg={bg}>
        2
      </Text>
      <Text span={3} color="white.0" variant="paragon" p={3} bg={bg}>
        3
      </Text>
      <Text span={2} color="white.0" variant="paragon" p={3} bg={bg}>
        4
      </Text>
      <Text span={2} color="white.0" variant="paragon" p={3} bg={bg}>
        5
      </Text>
    </Grid>
  )
}

// ----------------------------------------------------------------------------

export const FourColumn = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns="4" gutter="30px">
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        1
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        2
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        3
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        4
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        5
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        6
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        7
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        8
      </Text>
    </Grid>
  )
}
