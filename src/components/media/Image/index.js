import React from 'react'
import { renameKeys } from 'ramda-adjunct'

// ----------------------------------------------------------------------------

import Image from './component'

// ----------------------------------------------------------------------------

const normalizeImageProps = renameKeys({ srcset: 'srcSet' })

// ----------------------------------------------------------------------------

const ImageWrapper = (props) => <Image {...normalizeImageProps(props)} />

ImageWrapper.defaultProps = Image.defaultProps
ImageWrapper.propTypes = Image.propTypes

// ----------------------------------------------------------------------------

export default ImageWrapper
