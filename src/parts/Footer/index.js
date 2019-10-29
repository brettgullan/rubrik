import React from 'react'
import { Flex, Text } from 'rebass'

// ----------------------------------------------------------------------------

import SocialLinks from './social-links'
import SiteLinks from './site-links'
import AffiliateLinks from './affiliate-links'
import SeoLinks from './seo-links'

import { FullBleed } from '../../components/structure'

// ----------------------------------------------------------------------------

const Footer = () => {
  return (
    <FullBleed>
      <Flex
        as="footer"
        flexDirection="column"
        justifyContent="center"
        bg="#001722"
        maxWidth="page"
        mx="auto"
        py={5}
      >
        <SeoLinks p={4} />
        <SocialLinks
          flexWrap="wrap"
          p={4}
          py={5}
          my={5}
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              height: '1px',
              width: '75%',
              mx: 'auto',
              bg: '#526168',
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              height: '1px',
              width: '75%',
              mx: 'auto',
              bg: '#526168',
            },
          }}
        />
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
    </FullBleed>
  )
}

export default Footer
