import React from 'react'
import cx from 'classnames'

import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

import { ErrorMessage } from 'formik'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

const Error = ({ name, size, className, sx, ...rest }) => {
  const theme = useTheme()

  const sizingStyles = get(theme, `forms.messages.${size}`, null)

  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <Text
          tx="forms"
          variant="messages.error"
          className={cx(className, size, 'error')}
          sx={{
            ...sizingStyles,
            ...sx,
          }}
          {...rest}
        >
          {msg}
        </Text>
      )}
    </ErrorMessage>
  )
}

// ----------------------------------------------------------------------------

Error.defaultProps = {
  size: 'md',
}

export default Error
