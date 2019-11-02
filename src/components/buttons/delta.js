import React from 'react'
import Button from './button'

// ----------------------------------------------------------------------------

export const Delta = (props) => <Button {...props} />
Delta.defaultProps = {
  type: 'delta',
}

// ----------------------------------------------------------------------------

export default Delta
