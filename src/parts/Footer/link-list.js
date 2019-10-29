import React from 'react'

// ----------------------------------------------------------------------------

import { Flex, Link } from 'rebass'

// ----------------------------------------------------------------------------

const LinkList = ({ links, ...rest }) => (
  <Flex justifyContent="center" flexWrap="wrap" color="white.0" {...rest}>
    {links.map(({ label, link, ...rest }, index) => {
      return (
        <Link
          key={`link-${index}`}
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

export default LinkList
