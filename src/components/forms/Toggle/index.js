import React from 'react'
import styled from 'styled-components'

import cx from 'classnames'

import { useField } from 'formik'
import { Box } from 'rebass'
import { Checkbox, Label, Switch } from '@rebass/forms'

// ----------------------------------------------------------------------------

import { useVariant } from '../../../hooks'

// ----------------------------------------------------------------------------

const CheckBoxWrapper = styled.div`
  position: relative;
`

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Toggle = ({ name, size, className, prefix, sx, ...rest }) => {
  const [field, meta] = useField({ name, type: 'checkbox' })

  const { touched, error } = meta
  const states = { error: touched && error, valid: touched && !error }

  const sizingStyles = useVariant(`forms.toggle.${size}`)

  console.log(field)

  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" {...field} />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  )
}

// ----------------------------------------------------------------------------

Toggle.defaultProps = {
  prefix: 'toggle',
  size: 'md',
}

export default Toggle
