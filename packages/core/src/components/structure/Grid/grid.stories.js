import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../../../theme/src/storybook'

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
    <Grid columns="3" gutters="20px">
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
    </Grid>
  )
}

// ----------------------------------------------------------------------------

export const UsingGutterScaleValue = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns="3" gutters="2">
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
    </Grid>
  )
}

// ----------------------------------------------------------------------------

export const UnbalancedColumns = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns="4" gutters="16px">
      <Text color="white.0" variant="paragon" p={3} bg={bg} mb={3}>
        1
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} mb={3}>
        2
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} mb={3}>
        3
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} mb={3}>
        4
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} mb={3}>
        5
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} mb={3}>
        6
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
    <Grid justifyContent="center" columns="3" gutters="20px">
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
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        6
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        7
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        8
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        9
      </Text>
    </Grid>
  )
}

// ----------------------------------------------------------------------------

export const ContainerStyling = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid
      columns="3"
      gutters="20px"
      sx={{
        border: '1px solid',
        borderColor: 'gray.1',
        borderRadius: '8px',
        padding: '30px',
        bg: 'white.0',
      }}
    >
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        1
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        2
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} span={4}>
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

export const Single = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns="1" gutters="20px">
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

export const Responsive = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns={[1, 3]} gutters={[4, 5]}>
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

export const Complex = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid columns={[1, 3]} gutters={['16px', '30px']}>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        1
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} span={[1, 2]}>
        2
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        3
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg} span={[1, 3]}>
        4
      </Text>
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        5
      </Text>
    </Grid>
  )
}

// ----------------------------------------------------------------------------

export const ReallyComplex = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })
  return (
    <Grid
      justifyContent="center"
      columns={[1, 2, 2, 3]}
      gutters={['12px', '16px', '24px', '32px']}
    >
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        1
      </Text>
      <Text span={[1, 1, 1, 2]} color="white.0" variant="paragon" p={3} bg={bg}>
        2
      </Text>
      <Text span={[1, 2, 2, 3]} color="white.0" variant="paragon" p={3} bg={bg}>
        3
      </Text>
      <Text span={[1, 2, 2, 2]} color="white.0" variant="paragon" p={3} bg={bg}>
        4
      </Text>
      <Text span={[1, 1, 2, 2]} color="white.0" variant="paragon" p={3} bg={bg}>
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
      <Text color="white.0" variant="paragon" p={3} bg={bg}>
        9
      </Text>
    </Grid>
  )
}
