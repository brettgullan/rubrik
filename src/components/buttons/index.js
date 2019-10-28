import React from 'react'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'
import { darken, lighten, tint } from 'polished'

// ----------------------------------------------------------------------------

import { Button } from 'rebass'

// ----------------------------------------------------------------------------

export const Alpha = ({ size, color, ...rest }) => {
  const theme = useTheme()

  const sx = {
    color:
      color === 'subtle'
        ? darken(0.3, get(theme, `colors.button.${color}`))
        : 'white.0',
    bg: `button.${color}`,
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: darken(0.1, get(theme, `colors.button.${color}`)),
      },
    }),
  }

  return <Button variant={`alpha.${size}`} sx={sx} {...rest} />
}

Alpha.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
}

// ----------------------------------------------------------------------------

export const Beta = ({ size, color, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)

  const sx = {
    borderStyle: 'solid',
    borderColor: `button.${color}`,
    color: `button.${color}`,
    backgroundColor: 'white.0',
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: tint(0.85, colorValue),
      },
    }),
  }

  return <Button variant={`beta.${size}`} sx={sx} {...rest} />
}

Beta.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
}
