import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'

import NewsletterSubscribe from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Parts/NewsletterSubscribe',
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return (
    <Flex p={5}>
      <NewsletterSubscribe />
    </Flex>
  )
}
