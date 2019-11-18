import React from 'react'

import { useField } from 'formik'
import { Box } from 'rebass'
import { Checkbox, Label } from '@rebass/forms'

// ----------------------------------------------------------------------------

import { useVariant } from '../../../../../src/hooks'

// ----------------------------------------------------------------------------

const Component = ({ name, size, className, prefix, sx, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' })

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  const sizingStyles = useVariant(`forms.checkbox.${size}`)

  return (
    <Box>
      <Label htmlFor={`${prefix}-${name}`}>
        <Checkbox id={`${prefix}-${name}`} {...field} />
      </Label>
    </Box>
  )
}

// ----------------------------------------------------------------------------

Component.defaultProps = {
  prefix: 'toggle',
  size: 'md',
}

export default Component
