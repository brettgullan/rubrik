import React, {
  clonelement,
  createContext,
  createRef,
  useContext,
  useState,
  cloneElement,
} from 'react'

import { useTabs } from '@zendeskgarden/container-tabs'
import { Box, Flex } from 'rebass'

// ----------------------------------------------------------------------------

const TabsState = createContext()

export const Tabs = ({ options, children, ...rest }) => {
  const state = useTabs(options)

  return (
    <TabsState.Provider value={state}>
      <Box {...rest}>{children}</Box>
    </TabsState.Provider>
  )
}

export const useTabState = () => useContext(TabsState)

/*
export const TabList = ({ children }) => {
  const { getTabListProps, getTabProps } = useTabState()
  return (
    <Flex as="ul" {...getTabListProps()}>
      {children.map((child, index) => {
        const ref = createRef(null)
        const props = getTabProps({})
        return cloneElement(child, props)
      })}
    </Flex>
  )
}
*/

export const TabList = (props) => {
  const { getTabListProps } = useTabState()
  return <Flex as="ul" {...getTabListProps()} {...props} />
}

export const Tab = ({ index, tab, ...rest }) => {
  const { getTabProps, selectedItem } = useTabState()
  const ref = createRef(null)
  const tabProps = getTabProps({
    index,
    item: tab,
    key: tab,
    ref: ref,
    focusRef: ref,
  })
  return <Box as="li" {...tabProps} {...rest} />
}

export const TabPanel = ({ index, tab, ...rest }) => {
  const { getTabPanelProps } = useTabState()
  const tabPanelProps = getTabPanelProps({
    index,
    item: tab,
    key: tab,
  })
  return <Box {...tabPanelProps} {...rest} />
}
