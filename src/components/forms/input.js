import React from 'react'

import { Input as InputField, Textarea as TextAreaField } from '@rebass/forms'
// import { css } from 'styled-components'
import styled from '@emotion/styled'

// ----------------------------------------------------------------------------

const styles = {
  fontFamily: 'serif',
  fontWeight: 'normal',
  fontSize: 4,
  lineHeight: 'snug',
  p: 4,
  bg: 'white.0',
  border: '1px solid #D8D8D8',
  borderRadius: '1px',
  color: '#262C30',

  '&::placeholder': {
    color: '#BDBFC0',
  },
}

/*
const cssStyles = (props) => css`
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);
      color: rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      background-color: 1px solid rgb(191, 49, 12, 0.05);
      border: 1px solid rgb(191, 49, 12);
      color: rgb(191, 49, 12);
      outline: none;

      &::placeholder {
        color: rgb(191, 49, 12, 0.7);
      }

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid inherit;
        outline: none;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid inherit;
      }
    `}
`
*/

// ----------------------------------------------------------------------------

/*
const Input = styled(({ size, valid, error, ...rest }) => {
  const state = error ? 'error' : valid ? 'valid' : 'default'
  return <InputField color="red" variant={`input.${state}`} {...rest} />
})`
  ${(props) => {
    console.log(props.theme)
  }}
`
*/
const Input = ({ size, valid, error, ...rest }) => {
  const state = error ? 'error' : valid ? 'valid' : 'default'
  return <InputField color="red" variant={`input.${state}`} {...rest} />
}

Input.defaultProps = {
  size: 'md',
  valid: false,
  error: false,
}

export default Input

/*
export const TextArea = styled(({ sx, ...rest }) => (
  <TextAreaField
    sx={{
      ...styles,
      minWidth: '100%',
      maxWidth: '100%',
      ...sx,
    }}
    {...rest}
  />
))`
  ${cssStyles}
`
*/
