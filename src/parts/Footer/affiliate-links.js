import React from 'react'

// ----------------------------------------------------------------------------

import { Flex, Link } from 'rebass'

// ----------------------------------------------------------------------------

const AffiliateLinks = ({ links, ...rest }) => (
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

AffiliateLinks.defaultProps = {
  links: [
    {
      label: 'Fairfax Media',
      link: 'http://www.fairfaxmedia.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'The Sydney Morning Herald',
      link: 'http://www.smh.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'The Age',
      link: 'http://www.theage.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'CarAdvice',
      link: 'https://www.caradvice.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'Adzuna',
      link: 'https://www.adzuna.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'Domain',
      link: 'http://www.domain.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'Executive Style',
      link: 'http://www.executivestyle.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'RSVP',
      link: 'http://www.rsvp.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'Essential Baby',
      link: 'http://www.essentialbaby.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'APM',
      link: 'http://www.apmpropertydata.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'Weatherzone',
      link: 'http://www.weatherzone.com.au/',
      rel: 'nofollow',
    },
    {
      label: 'Traveller',
      link: 'http://www.traveller.com.au/',
      rel: 'nofollow',
    },
  ],
}

// ----------------------------------------------------------------------------

export default AffiliateLinks
