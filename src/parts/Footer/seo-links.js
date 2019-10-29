import React from 'react'

// ----------------------------------------------------------------------------

import { Flex, Link } from 'rebass'

import LinkList from './link-list'

// ----------------------------------------------------------------------------

const SeoLinks = (props) => {
  return <Flex>SEO Links</Flex>
}

// ----------------------------------------------------------------------------

SeoLinks.defaultProps = {
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

export default SeoLinks

const links = [
  {
    label: 'News & Reviews',
    links: [
      {
        label: 'Latest News',
        link: '/car-news/latest-news',
      },
      {
        label: 'Motor Shows',
        link: '/car-news/motor-shows',
      },
      {
        label: 'Featured Articles',
        link: '/car-news/motor-feature',
      },
      {
        label: 'Bike News',
        link: '/car-news/bike-news',
      },
      {
        label: 'Car Showroom',
        link: '/new-car-showroom',
      },
      {
        label: 'New Car Reviews',
        link: '/car-reviews/new-car-reviews',
      },
      {
        label: 'Used Car Reviews',
        link: '/car-reviews/used-car-reviews',
      },
      {
        label: 'Owner Reviews',
        link: '/car-reviews/owner-reviews',
      },
      {
        label: 'Drive Car of the Year',
        link: '/drive-car-of-the-year',
      },
    ],
  },
  {
    label: 'Research & Advice',
    links: [
      {
        label: 'Car Valuation',
        link: '/car-valuations',
      },
      {
        label: 'Car Insurance',
        link: '/research-and-advice/car-insurance',
      },
      {
        label: 'Car Finance',
        link: '/research-and-advice/car-finance',
      },
      {
        label: 'Road Safety',
        link: '/research-and-advice/road-safety',
      },
      {
        label: 'Green Cars',
        link: '/research-and-advice/green-cars',
      },
      {
        label: 'Ask the Experts',
        link: '/research-and-advice/tips-and-advice',
      },
      {
        label: 'Buying Tips',
        link: '/research-and-advice/tips-and-advice/buying-tips',
      },
      {
        label: 'Selling Tips',
        link: '/research-and-advice/tips-and-advice/selling-tips',
      },
      {
        label: 'Owning Tips',
        link: '/research-and-advice/tips-and-advice/owning-tips',
      },
      {
        label: 'Drive Glossary',
        link: '/motor-news/drive-glossary-20100331-rd0p',
      },
    ],
  },
]
