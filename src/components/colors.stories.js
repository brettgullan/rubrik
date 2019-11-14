import React, { Fragment } from 'react'
import { is } from 'ramda'

import { useTheme } from 'emotion-theming'
import { useVariant } from '../hooks'

import colors from '../theme/colors'

// ----------------------------------------------------------------------------

import { Box, Card, Flex, Heading } from 'rebass'

// ----------------------------------------------------------------------------

const ColorSwatch = ({ color, label }) => {
  return (
    <Card sx={{ p: 3, m: 3 }}>
      <Box sx={{ bg: color, width: '240px', height: '120px' }} />
      {label && <Heading variant="longPrimer">{label}</Heading>}
      <Heading variant="longPrimer">{color}</Heading>
    </Card>
  )
}

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Colours',
}

export const Primary = () => {
  console.log(colors)
  return (
    <Fragment>
      <h1>Colors</h1>
      {Object.keys(colors).map((color) => {
        // Single colour
        if (is(String, colors[color])) {
          return (
            <Flex>
              <ColorSwatch color={colors[color]} label={color} />
            </Flex>
          )
        }

        // Colour scale
        if (is(Array, colors[color])) {
          return (
            <Box sx={{ mx: 4, my: 5 }}>
              <Heading variant="trafalgar" sx={{ mb: 4 }}>
                {color}
              </Heading>
              <Flex sx={{ flexWrap: 'wrap' }}>
                {colors[color].map((c) => {
                  return <ColorSwatch color={c} />
                })}
              </Flex>
            </Box>
          )
        }
      })}
    </Fragment>
  )
}
