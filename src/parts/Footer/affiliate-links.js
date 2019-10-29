import React from 'react'

// ----------------------------------------------------------------------------

import LinkList from './link-list'

// ----------------------------------------------------------------------------

const AffiliateLinks = (props) => <LinkList {...props} />

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
