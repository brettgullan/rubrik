import React from 'react'
import styled from 'styled-components'
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

  const sizingStyles = useVariant(`forms.toggle.${size}`)

  console.log(field)

  return (
    <Box
      as="label"
      htmlFor={`${prefix}-${name}`}
      sx={{
        display: 'inline-block',
        borderRadius: '9999px',
      }}
    >
      <Box
        as="input"
        type="checkbox"
        id={`${prefix}-${name}`}
        sx={{
          appearance: 'none',
          outline: 'none',
          position: 'relative',
          display: 'block',
          border: 'none',
          width: '120px',
          height: '60px',
          borderRadius: '9999px',
          backgroundColor: '#bebebe',
          transition: '0.25s ease',
          '&:after': {
            content: '""',
            position: 'absolute',
            zIndex: 1,
            height: '50px',
            width: '50px',
            borderRadius: '9999px',
            backgroundColor: 'white.0',
            top: '50%',
            left: '5px',
            transform: 'translateY(-50%)',
            transition: '0.25s ease',
            boxShadow: '1px 3px 3px 1px rgba(0, 0, 0, 0.1)',
          },
          '&:checked': {
            backgroundColor: '#4fbe79',
            '&:after': {
              right: '5px',
              left: '65px',
              transition: '0.25s ease',
            },
          },
        }}
        {...field}
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
