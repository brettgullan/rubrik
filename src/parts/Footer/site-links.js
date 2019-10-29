import React from 'react'

// ----------------------------------------------------------------------------

import { Flex, Link } from 'rebass'

// ----------------------------------------------------------------------------

const SiteLinks = ({ links, ...rest }) => (
  <Flex justifyContent="center" flexWrap="wrap" color="white.0" {...rest}>
    {links.map(({ label, link, ...rest }) => {
      return (
        <Link
          variant="minion"
          color="inherit"
          px={4}
          py={2}
          href={link}
          sx={{
            fontWeight: 'regular',
            flexShrink: 0,
            textTransform: 'none',
          }}
          {...rest}
        >
          {label}
        </Link>
      )
    })}
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
      label: 'Advertise with us',
      link: '/advertise-with-us',
    },
    {
      label: 'Privacy policy',
      link: '/privacy-policy',
    },
  ],
}

// ----------------------------------------------------------------------------

export default SiteLinks
