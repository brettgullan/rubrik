import React from 'react'
import { useTabState, usePanelState } from '@bumaga/tabs'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

export { Tabs } from '@bumaga/tabs'

// ----------------------------------------------------------------------------

export const TabBar = (props) => {
  return <Flex as="ul" role="tablist" {...props} />
}

export const Tab = ({ sx, ...rest }) => {
  const { onClick } = useTabState()

  return <Flex as="li" role="tab" onClick={onClick} {...rest} />
}

const style = {
  position: 'static',
  height: 'auto',
  width: '100%',
  opacity: 1,
  '&[hidden]': {
    position: 'absolute',
    height: 0,
    p: 0,
    overflow: 'hidden',
    opacity: 0,
  },
}

export const TabPanel = ({ sx, ...rest }) => {
  const isActive = usePanelState()

  return isActive ? (
    <Flex role="tabpanel" sx={{ ...style, ...sx }} {...rest} />
  ) : (
    <Flex role="tabpanel" sx={{ ...style, ...sx }} hidden {...rest} />
  )
}

// ----------------------------------------------------------------------------
