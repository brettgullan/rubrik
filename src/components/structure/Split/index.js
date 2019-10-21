import React from 'react'
// import PropTypes from 'prop-types'

import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

export const Split = ({ children, ...props }) => {
  return (
    <Flex {...props} justifyContent="space-between">
      {children}
    </Flex>
  )
}

Split.propTypes = {}

export default Split

/*
const HeaderTypes = [
  PropTypes.objectOf(MenuPrimary),
  PropTypes.objectOf(UserInfo)
]

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([...HeaderTypes])),
    ...HeaderTypes
  ])
}
*/
