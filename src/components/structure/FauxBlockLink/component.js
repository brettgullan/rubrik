import React from 'react'

// ----------------------------------------------------------------------------

import { Block, BlockLink, blockStyles, linkStyles } from './styled'

// ----------------------------------------------------------------------------

export const FauxBlockLink = ({
  children,
  link,
  linkText,
  blockElement: Block,
  linkElement: Link,
  sx,
  ...props
}) => (
  <Block {...props} sx={{...blockStyles, ...sx}}>
    {children}
    <Link to={link} sx={linkStyles}>
      {linkText}
    </Link>
  </Block>
)

FauxBlockLink.defaultProps = {
  linkText: 'Read ...',
  blockElement: Block,
  linkElement: BlockLink,
}

export default FauxBlockLink
