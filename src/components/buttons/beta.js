import React from 'react'
import Button from './button'

// ----------------------------------------------------------------------------

export const Beta = (props) => <Button {...props} />
Beta.defaultProps = {
  type: 'beta',
}

// ----------------------------------------------------------------------------

export default Beta
