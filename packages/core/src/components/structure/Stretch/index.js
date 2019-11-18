import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'rebass'

// ----------------------------------------------------------------------------

export const Stretch = (props) => <Box flexGrow={1} {...props} />

// ----------------------------------------------------------------------------

Stretch.prototypes = {
  children: PropTypes.node.isRequired,
}

/**
 * @name Stretch
 *
 * @description
 * Wrapper component that automatically sets `flex-grow: 1`.
 * Used as a declarative convenience within larger flex-based layouts.
 *
 * @param {PropTypes.arrayOf(PropTypes.element)} children
 *
 * @returns {PropTypes.element} Child elements wrapped in a container with `flex-grow` set.
 *
 * @example
 *  <Flex>
 *    <Stretch>
 *      This is a Strech box that fills its container.
 *    </Stretch>
 *  </Flex>
 */
export default Stretch
