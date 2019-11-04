import React from 'react'

import { Stack } from '../../structure'
import { Paragon, Brevier } from '../../typography'

// ----------------------------------------------------------------------------

const PullQuote = ({ quote, attribution }) => {
  return (
    <Stack as="figure">
      <Paragon as="blockquote">{quote}</Paragon>
      {attribution && <Brevier as="figcaption">{attribution}</Brevier>}
    </Stack>
  )
}

export default PullQuote
