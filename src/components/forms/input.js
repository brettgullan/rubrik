import React from 'react'
import cx from 'classnames'

import { useField } from 'formik'
import { Input as InputField } from '@rebass/forms'

// ----------------------------------------------------------------------------

const Input = ({ name, size, className, ...rest }) => {
  const [field, meta] = useField(name)

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  return (
    <InputField
      variant="input"
      className={cx(className, size, states)}
      {...field}
      {...rest}
    />
  )
}

// ----------------------------------------------------------------------------

Input.defaultProps = {
  size: 'md',
}

export default Input
