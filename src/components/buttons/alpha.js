import React from 'react'
import cx from 'classnames'

import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'
import { merge } from 'ramda'
import { darken, tint } from 'polished'

// ----------------------------------------------------------------------------

import { Button } from 'rebass'

// ----------------------------------------------------------------------------

export const Alpha = ({ size, color, reverse, className, sx, ...rest }) => {
  const theme = useTheme()

  const colorValue = get(theme, `colors.button.${color}`)
  const whiteValue = get(theme, `colors.white.0`)

  const sizeStyles = get(theme, `buttons.${size}`)

  // Set styles from props ...
  let colorStyles = {
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
    colorStyles = {
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
    colorStyles = merge(colorStyles, {
      color: darken(0.3, background),
      '&:hover': {}, // remove hover styling
    })
  }

  return (
    <Button
      variant={`default`}
      className={cx(className, size, color)}
      sx={{
        ...sizeStyles,
        ...colorStyles,
        ...sx,
      }}
      {...rest}
    />
  )
}

// ----------------------------------------------------------------------------

Alpha.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
  reverse: false,
}

export default Alpha
