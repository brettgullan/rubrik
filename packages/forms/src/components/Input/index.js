import React from 'react'
import cx from 'classnames'

// ----------------------------------------------------------------------------

// import { useField } from 'formik'
import { Input as InputField } from '@rebass/forms'

import { useVariant } from '@rubrik/core'

// ----------------------------------------------------------------------------

const Input = ({ name, size, className, sx, useField, ...rest }) => {
  const [field, meta] = useField(name)

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  const sizingStyles = useVariant(`forms.input.${size}`)

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
