import React from 'react'
import { Input as InputField, Textarea as TextAreaField } from '@rebass/forms'
import { css } from 'styled-components'
import styled from '@emotion/styled'
import { Button, Heading as RebassHeading, Text as RebassText } from 'rebass'

// ----------------------------------------------------------------------------

const Heading = ({ sx, ...rest }) => (
  <RebassHeading
    color="brand"
    fontSize={[5, 6, 7]}
    sx={{
      fontFamily: 'serif',
      fontWeight: 'black',
      lineHeight: 'snug',
      ...sx,
    }}
    {...rest}
  />
)

const Text = ({ sx, ...rest }) => (
  <RebassText
    color="text"
    fontSize={[5, 6, 7]}
    sx={{
      fontFamily: 'serif',
      fontWeight: 'normal',
      lineHeight: 'snug',
      ...sx,
    }}
    {...rest}
  />
)

// ----------------------------------------------------------------------------

export const Submit = ({ disabled, sx, ...rest }) => (
  <Button
    type="submit"
    disabled={disabled}
    sx={{
      fontFamily: 'serif',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 4,
      padding: 4,
      borderRadius: '50px',
      minWidth: '210px',
      backgroundColor: '#0096D6',
      color: 'white.0',

      '&:disabled': {
        backgroundColor: 'rgba(0, 150, 214, 0.5)',
      },

      ...sx,
    }}
    {...rest}
  />
)

// ----------------------------------------------------------------------------

const Error = ({ sx, ...rest }) => (
  <Text
    as="span"
    sx={{
      display: 'block',
      mt: 3,
      fontFamily: 'sans',
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 1,
      color: 'rgb(191, 49, 12)',
      ...sx,
    }}
    {...rest}
  />
)

const Default = ({ sx, ...rest }) => (
  <Text
    as="span"
    sx={{
      display: 'block',
      mt: 3,
      fontFamily: 'sans',
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 1,
      ...sx,
    }}
    {...rest}
  />
)

export const Message = ({ type, ...rest }) => {
  switch (type) {
    case 'error':
      return <Error {...rest} />
    default:
      return <Default {...rest} />
  }
}

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

      /* Autocomplete styles in Chrome*/
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
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`

// ----------------------------------------------------------------------------

export const Input = styled(({ sx, ...rest }) => (
  <InputField sx={{ ...styles, ...sx }} {...rest} />
))`
  ${cssStyles}
`

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
