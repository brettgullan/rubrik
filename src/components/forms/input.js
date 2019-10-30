import React from 'react'
import cx from 'classnames'

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
  className,
  sx,
  ...rest
}) => {
  const theme = useTheme()

  const state = error ? 'error' : valid ? 'valid' : 'default'

  return (
    <InputField
      variant="input"
      className={cx(className, size, { [state]: state !== 'default' })}
      sx={{
        ...(color && {
          color,
        }),
        ...(validColor && {
          '&.valid': {
            color: validColor,
            bg: tint(0.95, get(theme, `colors.${validColor}`, validColor)),
          },
        }),
        ...(errorColor && {
          '&.error': {
            color: errorColor,
            bg: tint(0.95, get(theme, `colors.${errorColor}`, errorColor)),
          },
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
