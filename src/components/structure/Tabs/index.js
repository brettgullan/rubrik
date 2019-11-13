import React, {
  cloneElement,
  createContext,
  createRef,
  forwardRef,
  useContext,
} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useTabs } from '@zendeskgarden/container-tabs'
import { Box, Flex } from 'rebass'

// ----------------------------------------------------------------------------

const TabsState = createContext()

export const useTabState = () => useContext(TabsState)

// ----------------------------------------------------------------------------

export const Tabs = ({
  direction,
  selectedIndex,
  options,
  children,
  sx,
  ...rest
}) => {
  options.direction = direction
  options.defaultSelectedIndex = selectedIndex

  const state = useTabs(options)
  const { getTabPanelProps } = state

  // pre-process children
  let panelIndex = 0
  const _children = children.map((child) => {
    if (child.type.displayName === 'TabPanel') {
      const tabPanelProps = getTabPanelProps({
        index: panelIndex,
        item: panelIndex,
        key: `tabpanel-${panelIndex}`,
      })
      panelIndex++
      return cloneElement(child, tabPanelProps)
    } else if (child.type.displayName === 'TabList') {
      return cloneElement(child, { direction })
    }
    return child
  })

  // determine structural styles (directional)
  const styles = {
    // only apply for vertical tabs ...
    ...(direction === 'vertical' && {
      display: 'flex',
    }),
  }

  return (
    <TabsState.Provider value={state}>
      <Box sx={{ ...styles, ...sx }} {...rest}>
        {_children}
      </Box>
    </TabsState.Provider>
  )
}

Tabs.defaultProps = {
  options: {
    direction: 'horizontal',
    idPrefix: 'tabs',
    defaultSelectedIndex: 0,
  },
  direction: 'horizontal',
  selectedIndex: 0,
}

// ----------------------------------------------------------------------------

export const TabList = ({ direction, children, sx, ...rest }) => {
  const { getTabListProps, getTabProps, selectedItem } = useTabState()

  // pre-process tabs
  const tabs = children.map((child, index) => {
    const ref = createRef(null)
    const tabProps = getTabProps({
      index,
      item: index,
      key: `tab-${index}`,
      ref: ref,
      focusRef: ref,
    })
    tabProps.className = cx(child.props.className, {
      active: index == selectedItem,
    })
    return cloneElement(child, tabProps)
  })

  // determine structural styles (directional)
  const styles = {
    m: 0,
    p: 0,
    listStyle: 'none',
    flexShrink: 0,

    // only apply for vertical tabs ...
    ...(direction === 'vertical' && {
      flexDirection: 'column',
    }),
  }

  return (
    <Flex
      as="ul"
      sx={{
        ...styles,
        ...sx,
      }}
      {...getTabListProps()}
      {...rest}
    >
      {tabs}
    </Flex>
  )
}

// ----------------------------------------------------------------------------

export const Tab = forwardRef(({ sx, ...rest }, ref) => (
  <Box
    as="li"
    sx={{
      // minWidth: 'auto',
      // whiteSpace: 'nowrap',
      ...sx,
    }}
    ref={ref}
    {...rest}
  />
))

// ----------------------------------------------------------------------------

export const TabPanel = (props) => <Box {...props} />

// ----------------------------------------------------------------------------

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
