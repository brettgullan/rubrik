import React from 'react'
import cx from 'classnames'

import { Input as InputField } from '@rebass/forms'

// ----------------------------------------------------------------------------

const Input = ({ size, valid, error, className, ...rest }) => {
  const states = { error: error, valid: valid }

  return (
    <InputField
      variant="input"
      className={cx(className, size, states)}
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
