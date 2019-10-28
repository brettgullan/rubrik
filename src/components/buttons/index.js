import React from 'react'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'
import { merge } from 'ramda'
import { darken, lighten, mix, rgba, tint } from 'polished'

// ----------------------------------------------------------------------------

import { Button } from 'rebass'

// ----------------------------------------------------------------------------

export const Alpha = ({ size, color, reverse, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)
  const whiteValue = get(theme, `colors.white.0`)

  // Set styles from props ...
  let sx = {
    color: whiteValue,
    borderColor: colorValue,
    bg: colorValue,
    '&:hover': {
      borderColor: darken(0.1, colorValue),
      backgroundColor: darken(0.1, colorValue),
    },
  }

  // Adjust for 'reverse' case ...
  if (reverse) {
    sx = {
      color: colorValue,
      borderColor: whiteValue,
      bg: whiteValue,
      '&:hover': {
        borderColor: tint(0.85, colorValue),
        backgroundColor: tint(0.85, colorValue),
      },
    }
  }

  // Adjust for 'subtle' case ...
  if (color === 'subtle') {
    sx = merge(sx, {
      color: darken(0.3, background),
      '&:hover': {}, // remove hover styling
    })
  }

  return <Button variant={`default.${size}`} sx={sx} {...rest} />
}

Alpha.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
  reverse: false,
}

// ----------------------------------------------------------------------------

export const Beta = ({ size, color, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)

  const sx = {
    color: `button.${color}`,
    borderColor: `button.${color}`,
    backgroundColor: 'white.0',
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: tint(0.85, colorValue),
      },
    }),
  }

  return <Button variant={`default.${size}`} sx={sx} {...rest} />
}

Beta.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
}

// ----------------------------------------------------------------------------

export const Gamma = ({ size, color, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)

  const sx = {
    color: `button.${color}`,
    borderColor: `button.${color}`,
    backgroundColor: 'nd.4',
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: mix(0.85, get(theme, `colors.nd.4`), colorValue),
      },
    }),
  }

  return <Button variant={`default.${size}`} sx={sx} {...rest} />
}

Gamma.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
}

// ----------------------------------------------------------------------------

export const Delta = ({ size, color, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)

  const sx = {
    color: `white.0`,
    borderColor: `button.${color}`,
    backgroundColor: 'nd.4',
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: mix(0.85, get(theme, `colors.nd.4`), colorValue),
      },
    }),
  }

  return <Button variant={`default.${size}`} sx={sx} {...rest} />
}

Delta.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
}
