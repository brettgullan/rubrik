import React, { Fragment } from 'react'

// ----------------------------------------------------------------------------

import { Link } from 'rebass'

// ----------------------------------------------------------------------------

const LinkList = ({ links, sx, ...props }) => (
  <Fragment>
    {links.map(({ label, link, ...rest }, index) => {
      return (
        <Link
          key={`link-${index}`}
          variant="minion"
          href={link}
          sx={{
            color: 'white.0',
            fontWeight: 'regular',
            flexShrink: 0,
            textTransform: 'none',
            px: 4,
            py: 2,
            ...sx,
          }}
          {...props}
          {...rest}
        >
          {label}
        </Link>
      )
    })}
  </Fragment>
)

export default LinkList
