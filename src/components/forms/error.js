import React from 'react'
import cx from 'classnames'

import { ErrorMessage } from 'formik'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

const Error = ({ name, size, className, ...rest }) => (
  <ErrorMessage name={name}>
    {(msg) => (
      <Text
        tx="forms"
        variant="messages"
        className={cx(className, size, 'error')}
        {...rest}
      >
        {msg}
      </Text>
    )}
  </ErrorMessage>
)

// ----------------------------------------------------------------------------

Error.defaultProps = {
  size: 'md',
}

export default Error
