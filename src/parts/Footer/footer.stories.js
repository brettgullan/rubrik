import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'

import Footer from '.'
import SocialLinks from './social-links'
import SiteLinks from './site-links'
import AffiliateLinks from './affiliate-links'
import SeoLinks from './seo-links'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Parts/Footer',
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return <Footer />
}

export const Social = () => {
  return (
    <Flex
      as="footer"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        p: 5,
        bg: '#001722',
      }}
    >
      <SocialLinks />
    </Flex>
  )
}

export const Site = () => {
  return (
    <Flex
      as="footer"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        p: 5,
        bg: '#001722',
      }}
    >
      <SiteLinks />
    </Flex>
  )
}

export const Affiliate = () => {
  return (
    <Flex
      as="footer"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        p: 5,
        bg: '#001722',
      }}
    >
      <AffiliateLinks />
    </Flex>
  )
}

export const SEO = () => {
  return (
    <Flex
      as="footer"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        p: 5,
        bg: '#001722',
      }}
    >
      <SeoLinks />
    </Flex>
  )
}
