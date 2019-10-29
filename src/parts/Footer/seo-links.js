import React from 'react'

// ----------------------------------------------------------------------------

import { Box, Flex, Heading } from 'rebass'

import LinkList from './link-list'

// ----------------------------------------------------------------------------

const SeoLinks = ({ links }) => {
  return (
    <Flex justifyContent="center" mx={[-4, -4, -5]}>
      {links.map(({ label, links: group }, index) => {
        return (
          <Box key={`link-group-${index}`} px={[4, 4, 5]}>
            <Heading
              variant="pica"
              fontFamily="text"
              fontWeight="regular"
              color="#526168"
              mb={4}
            >
              {label}
            </Heading>
            <LinkList links={group} display="block" px={0} />
          </Box>
        )
      })}
    </Flex>
  )
}

// ----------------------------------------------------------------------------

SeoLinks.defaultProps = {
  links: [
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
    {
      label: 'Browse by Lifestyle',
      links: [
        {
          label: 'What Car Should I Buy?',
          link: '/research-and-advice/what-car-should-i-buy',
        },
        {
          label: 'First Car',
          link: '/what-new-car-should-i-buy/first-car',
        },
        {
          label: 'Small Car',
          link: '/what-new-car-should-i-buy/small-car',
        },
        {
          label: 'Family Car',
          link: '/what-new-car-should-i-buy/family-car',
        },
        {
          label: 'Adventure',
          link: '/what-new-car-should-i-buy/adventure',
        },
        {
          label: 'Prestige',
          link: '/what-new-car-should-i-buy/prestige',
        },
        {
          label: 'Performance',
          link: '/what-new-car-should-i-buy/performance',
        },
        {
          label: 'Trade & Commercial',
          link: '/what-new-car-should-i-buy/trade-and-commercial',
        },
        {
          label: 'Eco',
          link: '/what-new-car-should-i-buy/eco',
        },
      ],
    },
    {
      label: 'Manufacturers',
      links: [
        {
          label: 'BMW',
          link: '/new-car-showroom/bmw',
        },
        {
          label: 'Audi',
          link: '/new-car-showroom/audi',
        },
        {
          label: 'Ford',
          link: '/new-car-showroom/ford',
        },
        {
          label: 'Hyundai',
          link: '/new-car-showroom/hyundai',
        },
        {
          label: 'Kia',
          link: '/new-car-showroom/kia',
        },
        {
          label: 'Toyota',
          link: '/new-car-showroom/toyota',
        },
        {
          label: 'Volvo',
          link: '/new-car-showroom/volvo',
        },
        {
          label: 'Volkswagen',
          link: '/new-car-showroom/volkswagen',
        },
        {
          label: 'See all Manufacturers',
          link: '/new-car-showroom',
        },
      ],
    },
    {
      label: 'Buy & Sell',
      links: [
        {
          label: 'Buy New Cars',
          link: '/new-car-showroom/',
        },
        {
          label: 'Buy Used Cars',
          link: '/car-sales/buy-used-cars/australia',
        },
        {
          label: 'Sell your Car',
          link: '/sell-your-car',
        },
        {
          label: 'Car Valuation',
          link: '/car-valuations',
        },
        {
          label: 'Manage your Car Ad',
          link:
            'https://members.drivenetwork.com.au/members/register?source=www.drive.com.au&returnURL=/',
        },
      ],
    },
  ],
}

// ----------------------------------------------------------------------------

export default SeoLinks