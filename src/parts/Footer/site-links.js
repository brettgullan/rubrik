import React from 'react'

// ----------------------------------------------------------------------------

import LinkList from './link-list'

// ----------------------------------------------------------------------------

const SiteLinks = (props) => <LinkList {...props} />

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
