import React from 'react'
import { position, size } from 'polished'

import cx from 'classnames'

import { useField } from 'formik'
import { Box } from 'rebass'

// ----------------------------------------------------------------------------

import { useVariant } from '../../../hooks'

// ----------------------------------------------------------------------------

const Toggle = ({ name, size, className, prefix, sx, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' })

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  const sizeStyles = useVariant(`forms.toggle.${size}`)

  // console.log(field)

  return (
    <Box
      as="label"
      htmlFor={`${prefix}-${name}`}
      className={cx(className, size, states)}
      sx={{
        display: 'inline-block',
        borderRadius: '9999px',
      }}
    >
      <Box
        as="input"
        type="checkbox"
        id={`${prefix}-${name}`}
        role="checkbox"
        tabindex="0"
        aria-checked={field.checked}
        tx="forms"
        variant="toggle.base"
        sx={{
          ...sizeStyles,
          ...sx,
        }}
        {...field}
        {...rest}
      />
    </Box>
  )
}

// ----------------------------------------------------------------------------

Toggle.defaultProps = {
  prefix: 'toggle',
  size: 'md',
}

export default Toggle
