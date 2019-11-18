import React from 'react'
import cx from 'classnames'

import { ErrorMessage } from 'formik'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { useVariant } from '../../../../../src/hooks'

// ----------------------------------------------------------------------------

const Error = ({ name, size, className, sx, ...rest }) => {
  const sizingStyles = useVariant(`forms.message.${size}`)

  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <Text
          tx="forms"
          variant="message.error"
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
