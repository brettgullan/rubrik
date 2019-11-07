import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { useImageConfig, useVariant } from '../../../hooks'
import { Stack } from '../../structure'
import { CloudinaryImage } from '../../media'

// ----------------------------------------------------------------------------

const ImageBlock = ({ image, caption, sx, ...rest }) => {
  const imageOptions = useImageConfig('content.default')
  const styles = useVariant('content.imageblock')
  const { block: sxBlock, image: sxImage, caption: sxCaption } = sx

  const imageComponent = (
    <CloudinaryImage
      image={image}
      options={imageOptions}
      sx={{
        display: 'block',
        width: '100%',
        ...styles.image,
        ...(sxBlock && sxCaption),
      }}
    />
  )

  return (
    <Stack as="figure" sx={{ ...styles.block, ...(sxBlock || sx) }} {...rest}>
      {imageComponent}
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

ImageBlock.defaultProps = {
  sx: {},
}

export default ImageBlock
