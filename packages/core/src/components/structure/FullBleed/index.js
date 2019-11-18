import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

const sx = {
  position: 'relative',
  zIndex: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    width: '100vw',
    height: '100%',
    left: 'calc(50% - 50vw)',
    backgroundColor: 'inherit',
  },
}

// ----------------------------------------------------------------------------

/**
  Creates a full-bleed background pseudo-element.  
  Inherits the parent element's background colour.  
 */
export const FullBleed = ({ children: Component }) =>
  React.cloneElement(Component, { sx })

FullBleed.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullBleed
