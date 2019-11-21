import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { useVariant } from '../../../../../src/hooks'
import { Stack } from '../../structure'

// ----------------------------------------------------------------------------

const CaptionBlock = ({ caption, sx, ...rest }) => {
  const styles = useVariant('content.captionblock')
  const { block: sxBlock, caption: sxCaption } = sx
  return (
    <Stack as="figure" sx={{ ...styles.block, ...(sxBlock || sx) }} {...rest}>
      {children}
      {caption && (
        <Flex
          as="figcaption"
          className="caption"
          sx={{ ...styles.caption, ...(sxBlock && sxCaption) }}
        >
          {caption}
        </Flex>
      )}
    </Stack>
  )
}

export default CaptionBlock
