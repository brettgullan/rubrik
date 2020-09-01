import React from 'react'
import PropTypes from 'prop-types'

import { mergeDeepRight } from 'ramda'

// ----------------------------------------------------------------------------

const base = {
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
    background: 'inherit',
    backgroundColor: 'inherit',
    backgroundImage: 'inherit',
  },
}

// ----------------------------------------------------------------------------

/**
  Creates a full-bleed background pseudo-element.  
  Inherits the parent element's background colour.  
 */
export const FullBleed = ({ children: Component }) => {
  const sx = mergeDeepRight(base, Component.props.sx || {})
  return React.cloneElement(Component, { sx })
}

FullBleed.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullBleed
