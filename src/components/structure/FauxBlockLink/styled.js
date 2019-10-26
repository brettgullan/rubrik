import React from 'react'

// ----------------------------------------------------------------------------

import { Link } from 'rebass'
import { hideText, position, size } from 'polished'

// ----------------------------------------------------------------------------

export const linkStyles = {
  ...position('absolute', 0),
  ...size('100%'),
  ...hideText(),
  zIndex: 'auto',
}

export const blockStyles = {
  position: 'relative',
  '& a': {
    position: 'relative',
    zIndex: 10,
  },
  '& > a:last-child': linkStyles,
}

// ----------------------------------------------------------------------------

export const BlockLink = Link
