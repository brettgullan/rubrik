import React from 'react'
import cx from 'classnames'

import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

import { useField } from 'formik'
import { Input as InputField } from '@rebass/forms'

// ----------------------------------------------------------------------------

const Input = ({ name, size, className, sx, ...rest }) => {
  const [field, meta] = useField(name)
  const theme = useTheme()

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  const sizingStyles = get(theme, `forms.input.${size}`, null)

  return (
    <InputField
      variant="input.base"
      className={cx(className, size, states)}
      {...field}
      sx={{
        ...sizingStyles,
        ...sx,
      }}
      {...rest}
    />
  )
}

// ----------------------------------------------------------------------------

Input.defaultProps = {
  size: 'md',
}

export default Input
