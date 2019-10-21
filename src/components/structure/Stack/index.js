import React from 'react'
import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

export const Stack = (props) => <Flex flexDirection="column" {...props} />

/**
 * Wrapper component that automatically sets `flex-direction: column`.
 * Used as a declarative convenience within larger flex-based layouts.
 * @name Stack
 * @param {PropTypes.arrayOf(PropTypes.element)} children
 * @returns {PropTypes.element} Child elements wrapped in a container with `flex-direction` set.
 * @example
 *  <Flex>
 *    <Stretch>
 *      This is a Strech box that fills its container.
 *    </Stretch>
 *  </Flex>
 */
export default Stack
