import React from 'react'

// ----------------------------------------------------------------------------

const sx = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
}

// ----------------------------------------------------------------------------

export const FullWidth = ({ children: Component }) =>
  React.cloneElement(Component, { maxWidth: 'auto', sx })

export default FullWidth
