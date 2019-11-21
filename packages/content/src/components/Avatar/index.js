import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { useImageConfig, useVariant } from '../../../../../src/hooks'
import { Image } from '../../../../../src/components/media'

// ----------------------------------------------------------------------------

const Avatar = ({ image, label, children, sx, ...rest }) => {
  const styles = useVariant('content.avatar')
  const imageOptions = useImageConfig('avatar')
  const { block: sxBlock, caption: sxCaption } = sx
  return (
    <Flex sx={{ ...styles.block, ...(sxBlock || sx) }} {...rest}>
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
    </Flex>
  )
}

export default Avatar
