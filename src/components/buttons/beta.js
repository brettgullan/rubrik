import React from 'react'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'
import { merge } from 'ramda'
import { lighten, tint } from 'polished'

// ----------------------------------------------------------------------------

import { Button } from 'rebass'

// ----------------------------------------------------------------------------

export const Beta = ({ size, color, reverse, sx, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)
  const whiteValue = get(theme, `colors.white.0`)

  let styles = {
    color: colorValue,
    borderColor: colorValue,
    backgroundColor: whiteValue,
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: tint(0.85, colorValue),
      },
    }),
  }

  // Adjust for 'reverse' case ...
  if (reverse) {
    styles = {
      color: whiteValue,
      borderColor: whiteValue,
      bg: colorValue,
      '&:hover': {
        backgroundColor: lighten(0.05, colorValue),
      },
    }
  }

  // Adjust for 'subtle' case ...
  if (color === 'subtle') {
    styles = merge(styles, {
      '&:hover': {}, // remove hover styling
    })
  }

  return (
    <Button variant={`default.${size}`} sx={[...styles, ...sx]} {...rest} />
  )
}

// ----------------------------------------------------------------------------

Beta.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
  reverse: false,
}

export default Beta
