import React, { cloneElement } from 'react'
import cx from 'classnames'

import { evolve, compose, map } from 'ramda'
import { renameKeys } from 'ramda-adjunct'

// ----------------------------------------------------------------------------

const LAZY_CLASS = 'lazyload'

// ----------------------------------------------------------------------------

const renameMap = {
  src: 'data-src',
  srcset: 'data-srcset',
  srcSet: 'data-srcset',
  sizes: 'data-sizes',
  placeholder: 'src',
  lqip: 'src',
}

const renameProps = renameKeys(renameMap)

const remapProps = compose(
  evolve({
    sources: map(renameProps),
    image: renameProps,
    options: renameProps,
  }),
  renameProps
)

// ----------------------------------------------------------------------------

const LazySizes = ({ children: Component }) => {
  const { className, ...rest } = Component.props

  const props = {
    className: cx(className, LAZY_CLASS),
    ...remapProps(rest),
  }

  return cloneElement(Component, props)
}

export default LazySizes
