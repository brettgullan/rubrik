import React, {
  cloneElement,
  createContext,
  createRef,
  forwardRef,
  useContext,
} from 'react'
import cx from 'classnames'

import { useTabs } from '@zendeskgarden/container-tabs'
import { Box, Flex } from 'rebass'

// ----------------------------------------------------------------------------

const TabsState = createContext()

export const Tabs = ({ options, children, ...rest }) => {
  const state = useTabs(options)
  const { getTabPanelProps } = state
  let panelIndex = 0

  return (
    <TabsState.Provider value={state}>
      <Box {...rest}>
        {children.map((child) => {
          if (child.type.displayName === 'TabPanel') {
            const tabPanelProps = getTabPanelProps({
              index: panelIndex,
              item: panelIndex,
              key: panelIndex,
            })
            panelIndex++
            return cloneElement(child, tabPanelProps)
          }
          return child
        })}
      </Box>
    </TabsState.Provider>
  )
}

export const useTabState = () => useContext(TabsState)

export const TabList = ({ children, ...rest }) => {
  const { getTabListProps, getTabProps, selectedItem } = useTabState()
  return (
    <Flex as="ul" {...getTabListProps()} {...rest}>
      {children.map((child, index) => {
        const ref = createRef(null)
        const props = getTabProps({
          index,
          item: index,
          key: index,
          ref: ref,
          focusRef: ref,
        })
        props.className = cx(child.props.className, {
          active: index == selectedItem,
        })
        return cloneElement(child, props)
      })}
    </Flex>
  )
}

export const Tab = forwardRef((props, ref) => (
  <Box as="li" ref={ref} {...props} />
))

export const TabPanel = (props) => <Box {...props} />

/*
export const Tabs = ({ options, children, ...rest }) => {
  const state = useTabs(options)

  return (
    <TabsState.Provider value={state}>
      <Box {...rest}>{children}</Box>
    </TabsState.Provider>
  )
}

export const useTabState = () => useContext(TabsState)

export const TabList = (props) => {
  const { getTabListProps } = useTabState()
  return <Flex as="ul" {...getTabListProps()} {...props} />
}

export const Tab = ({ index, className, ...rest }) => {
  const { getTabProps, selectedItem } = useTabState()
  const ref = createRef(null)
  const tabProps = getTabProps({
    index,
    item: index,
    key: index,
    ref: ref,
    focusRef: ref,
  })
  return (
    <Box
      as="li"
      className={cx(className, { active: index == selectedItem })}
      {...tabProps}
      {...rest}
    />
  )
}

export const TabPanel = ({ index, tab, ...rest }) => {
  const { getTabPanelProps } = useTabState()
  const tabPanelProps = getTabPanelProps({
    index,
    item: index,
    key: index,
  })
  return <Box {...tabPanelProps} {...rest} />
}
*/
