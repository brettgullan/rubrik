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

/**
 *  Wrapper component that clones its child element, while remapping
 *  the wrapped element's props to support lazy-loading.
 *
 *  Longer term, this is intended to be an abstraction, allowing different
 *  lazy-loading strategies to be implemented, or toggled on/off.
 */
const LazyLoad = ({ children: Component }) => {
  const { className, ...rest } = Component.props

  const props = {
    className: cx(className, LAZY_CLASS),
    ...remapProps(rest),
  }

  return cloneElement(Component, props)
}

export default LazyLoad
