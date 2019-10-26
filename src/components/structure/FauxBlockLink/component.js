import React, { cloneElement, Fragment } from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { BlockLink, blockStyles, linkStyles } from './styled'

// ----------------------------------------------------------------------------

export const FauxBlockLink = ({
  children: child,
  link,
  linkText,
  linkElement: Link,
  sx,
  ...props
}) => {
  const children = (
    <Fragment>
      {child.props.children}
      <Link href={link} sx={linkStyles}>
        {linkText}
      </Link>
    </Fragment>
  )

  return cloneElement(
    child,
    { sx: { ...child.props.sx, ...blockStyles } },
    children
  )
}

// ----------------------------------------------------------------------------

FauxBlockLink.defaultProps = {
  linkText: 'Read ...',
  linkElement: BlockLink,
}

FauxBlockLink.propTypes = {
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string,
}

export default FauxBlockLink
