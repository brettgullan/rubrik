import React from 'react'
import { Flex, Text } from 'rebass'

// ----------------------------------------------------------------------------

import SocialLinks from './social-links'
import SiteLinks from './site-links'
import AffiliateLinks from './affiliate-links'

// ----------------------------------------------------------------------------

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      justifyContent="center"
      bg="#001722"
    >
      <SocialLinks p={4} />
      <SiteLinks p={4} />
      <AffiliateLinks p={4} />
      <Text
        variant="minion"
        p={4}
        color="#526168"
        sx={{
          textAlign: 'center',
          fontWeight: 'regular',
          textTransform: 'none',
        }}
      >
        Copyright ©2019 Drive.com.au
      </Text>
    </Flex>
  )
}

export default Footer
