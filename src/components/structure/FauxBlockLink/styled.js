import React from 'react'

// ----------------------------------------------------------------------------

import { Flex, Link } from 'rebass'
import { hideText, position, size } from 'polished'

// ----------------------------------------------------------------------------

export const blockStyles = {
  position: 'relative',
  '& a': {
    position: 'relative',
    zIndex: 10,
  },
  '& > a:last-child': {
    ...position('absolute', 0),
    ...size('100%'),
    ...hideText(),
    zIndex: 'auto',
  },
}

export const linkStyles = {
  ...position('absolute', 0),
  ...size('100%'),
  ...hideText(),
}

// ----------------------------------------------------------------------------

export const Block = (props) => <Flex {...props} />

export const BlockLink = ({ to, ...rest }) => <Link href={to} {...rest} />
