import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { useImageConfig, useVariant } from '../../../hooks'
import { Stack } from '../../structure'
import { Image } from '../../media'

// ----------------------------------------------------------------------------

const ImageBlock = ({ image, caption, sx, ...rest }) => {
  const styles = useVariant('content.imageblock')
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

export default ImageBlock
