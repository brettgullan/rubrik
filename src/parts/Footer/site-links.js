import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import LinkList from './link-list'

// ----------------------------------------------------------------------------

const SiteLinks = ({ links, ...rest }) => (
  <Flex justifyContent="center" flexWrap="wrap" color="white.0" {...rest}>
    <LinkList links={links} fontWeight="bold" />
  </Flex>
)

// ----------------------------------------------------------------------------

SiteLinks.defaultProps = {
  links: [
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Contact Us',
      link: '/contact-us',
    },
    {
      label: 'Newsletter',
      link: '/newseletter',
    },
    {
      label: 'Advertise with Us',
      link: '/advertise-with-us',
    },
    {
      label: 'Privacy Policy',
      link: '/privacy-policy',
    },
  ],
}

// ----------------------------------------------------------------------------

export default SiteLinks
