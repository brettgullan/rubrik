import React from 'react'
import { useTabState, usePanelState } from '@bumaga/tabs'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

export { Tabs } from '@bumaga/tabs'

// ----------------------------------------------------------------------------

export const TabBar = (props) => {
  return <Flex role="tablist" {...props} />
}

export const Tab = ({ children }) => {
  const { onClick } = useTabState()

  return (
    <button role="tab" onClick={onClick}>
      {children}
    </button>
  )
}

export const TabPanel = ({ children }) => {
  const isActive = usePanelState()

  return isActive ? <p role="tabpanel">{children}</p> : null
}

// ----------------------------------------------------------------------------
