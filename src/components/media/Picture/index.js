import React from 'react'
import { evolve, map } from 'ramda'
import { renameKeys } from 'ramda-adjunct'

// ----------------------------------------------------------------------------

import Picture from './component'

// ----------------------------------------------------------------------------

const transformProps = evolve({
  sources: map(renameKeys({ srcset: 'srcSet' })),
})

// ----------------------------------------------------------------------------

const PictureWrapper = (props) => <Picture {...transformProps(props)} />

PictureWrapper.defaultProps = Picture.defaultProps
PictureWrapper.propTypes = Picture.propTypes

export default PictureWrapper
