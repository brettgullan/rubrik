import React from 'react'

import { Flex } from 'rebass'
import { Trafalgar } from '../../components/typography'

// ----------------------------------------------------------------------------

const Component = (props) => {
  return (
    <Flex p={5} {...props}>
      <Trafalgar color="inherit">Confirm!</Trafalgar>
    </Flex>
  )
}

export default Component
