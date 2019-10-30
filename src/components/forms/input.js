import React from 'react'

import { Input as InputField } from '@rebass/forms'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'
import { tint } from 'polished'

// ----------------------------------------------------------------------------

const Input = ({
  size,
  valid,
  error,
  color,
  validColor,
  errorColor,
  sx,
  ...rest
}) => {
  const theme = useTheme()
  const sizingStyles = get(theme, `forms.input.${size}`, size)

  const state = error ? 'error' : valid ? 'valid' : 'default'
  let currentColor = error ? errorColor : valid ? validColor : color
  currentColor = get(theme, `colors.${currentColor}`, currentColor)

  return (
    <InputField
      variant={`input.${state}`}
      sx={{
        ...sizingStyles,
        ...(currentColor && {
          color: currentColor,
          ...(state !== 'default' && {
            bg: tint(0.95, currentColor),
          }),
        }),
        ...sx,
      }}
      {...rest}
    />
  )
}

// ----------------------------------------------------------------------------

Input.defaultProps = {
  size: 'md',
  valid: false,
  error: false,
}

export default Input
