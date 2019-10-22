import React from 'react'

// ----------------------------------------------------------------------------

const sx = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
}

// ----------------------------------------------------------------------------

/**
 *  Element width is set to 100vw and negative margins applied
 *  to break out of parent container.
 *
 *  Caveats:
 *  - Ancestor elements must not have overflow: hidden specified.
 */
export const FullWidth = ({ children: Component }) =>
  React.cloneElement(Component, { maxWidth: 'auto', sx })

export default FullWidth
