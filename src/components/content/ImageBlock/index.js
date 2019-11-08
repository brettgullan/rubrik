import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { useImageConfig, useVariant } from '../../../hooks'
import { Stack } from '../../structure'
import { ResponsiveImage } from '../../media'

// ----------------------------------------------------------------------------

const ImageBlock = ({ image, caption, children, sx, ...rest }) => {
  const imageOptions = useImageConfig('content.default')
  const styles = useVariant('content.imageblock')
  const { block: sxBlock, image: sxImage, caption: sxCaption } = sx

  // Render image using function as child, if provided,
  // otherwise emit default ResponsiveImage component.
  const imageComponent = children ? (
    children({ image, sx: sxImage || {} })
  ) : (
    <ResponsiveImage
      image={image}
      options={imageOptions}
      sx={{
        display: 'block',
        width: '100%',
        ...styles.image,
        ...(sxBlock && sxImage),
      }}
    />
  )

  return (
    <Stack
      as="figure"
      sx={{
        ...styles.block,
        ...(sxBlock || sx),
      }}
      {...rest}
    >
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

// ----------------------------------------------------------------------------

ImageBlock.defaultProps = {
  sx: {},
}

ImageBlock.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  caption: PropTypes.string,
  sx: PropTypes.object,
  children: PropTypes.func,
}

// ----------------------------------------------------------------------------

export default ImageBlock
