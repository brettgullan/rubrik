import React from 'react'
import { Heading as RBHeading, Text as RBText } from 'rebass'

// ----------------------------------------------------------------------------

import styled from '@emotion/styled'
import { system } from 'styled-system'

// ----------------------------------------------------------------------------

const textTransform = system({
  prop: 'textTransform',
  cssProperty: 'textTransform',
})

const textDecoration = system({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

const Heading = styled(RBHeading)`
  ${system({
    textTransform: true,
    textDecoration: true,
  })}
`

const Text = styled(RBText)`
  ${system({
    textTransform: true,
    textDecoration: true,
  })}
`

// ----------------------------------------------------------------------------

export const Canon = (props) => <Heading variant="canon" {...props} />

/**
  Article title or section header
**/
export const Trafalgar = (props) => <Heading variant="trafalgar" {...props} />

export const Paragon = (props) => <Text variant="paragon" {...props} />
export const DoublePica = (props) => <Text variant="doublePica" {...props} />
export const GreatPrimer = (props) => <Text variant="greatPrimer" {...props} />
export const Pica = (props) => <Text variant="pica" {...props} />
export const LongPrimer = (props) => <Text variant="longPrimer" {...props} />
export const Brevier = (props) => <Text variant="brevier" {...props} />
export const Minion = (props) => <Text variant="minion" {...props} />
export const BodyCopy = (props) => <Text variant="bodyCopy" {...props} />

// ----------------------------------------------------------------------------

export const Atlas = (props) => <Heading variant="atlas" {...props} />
export const Elephant = (props) => <Heading variant="elephant" {...props} />
export const Imperial = (props) => <Heading variant="imperial" {...props} />
export const Royal = (props) => <Heading variant="royal" {...props} />
export const Foolscap = (props) => <Heading variant="foolscap" {...props} />
