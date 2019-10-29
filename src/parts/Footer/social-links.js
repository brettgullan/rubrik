import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ----------------------------------------------------------------------------

import {
  faFacebookSquare,
  faGoogle,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { Flex, Link } from 'rebass'

// ----------------------------------------------------------------------------

const SocialLinks = ({ links, ...rest }) => (
  <Flex justifyContent="center" {...rest}>
    {links.map(({ network, link, icon }, index) => {
      return (
        <Link
          key={`social-link-${index}`}
          variant="doublePica"
          color="white.0"
          px={4}
          href={link}
          target="_blank"
          data-network={network}
          sx={{
            transition: 'color 200ms ease',
            '&:hover': {
              color: `social.${network}`,
            },
          }}
        >
          <FontAwesomeIcon icon={icon} />
        </Link>
      )
    })}
  </Flex>
)

// ----------------------------------------------------------------------------

SocialLinks.defaultProps = {
  links: [
    {
      network: 'facebook',
      link: 'https://www.facebook.com/Drive.com.au',
      icon: faFacebookSquare,
    },
    {
      network: 'twitter',
      link: 'https://twitter.com/Drivecomau',
      icon: faTwitter,
    },
    {
      network: 'instagram',
      link: 'https://instagram.com/drivecomau/',
      icon: faInstagram,
    },
    {
      network: 'google',
      link: 'https://plus.google.com/u/0/+Drivecomau/posts',
      icon: faGoogle,
    },
    {
      network: 'youtube',
      link: 'https://www.youtube.com/channel/UC2UeuqqiHrqStYmNcls9jtw',
      icon: faYoutube,
    },
  ],
}

// ----------------------------------------------------------------------------

export default SocialLinks
