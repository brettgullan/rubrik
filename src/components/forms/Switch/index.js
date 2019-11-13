import React from 'react'
import styled from 'styled-components'

import cx from 'classnames'

import { useField } from 'formik'
import { Switch as SwitchField } from '@rebass/forms'

// ----------------------------------------------------------------------------

import { useVariant } from '../../../hooks'

// ----------------------------------------------------------------------------

const Switch = ({ name, size, className, sx, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' })

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  const sizingStyles = useVariant(`forms.switch.${size}`)

  return (
    <SwitchField
      variant="switch.base"
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

Switch.defaultProps = {
  size: 'md',
}

export default Switch
