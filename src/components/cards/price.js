import React from 'react'

// ----------------------------------------------------------------------------

import { Box } from 'rebass'
import { Paragon, Minion } from '../typography'

// ----------------------------------------------------------------------------

const Label = (props) => (
  <Minion fontFamily="text" fontWeight="regular" color="gray.2" {...props} />
)

// ----------------------------------------------------------------------------

const Price = ({ price, type, rangeStart, rangeEnd, label, ...rest }) => {
  // sanity ... require price or rangeStart
  if (!!price && !!rangeStart) return null

  const labelText = label || `Price${rangeStart ? ' Range' : ''}`

  return (
    <Box>
      <Label>{labelText}</Label>
      <Paragon fontFamily="title" fontWeight="semibold" display="inline-block">
        {price || `${rangeStart} - ${rangeEnd}`}
      </Paragon>
      {type && (
        <Label
          display="inline-block"
          fontWeight="light"
          fontStyle="italic"
          ml={3}
        >
          {type}
        </Label>
      )}
    </Box>
  )
}

export default Price
