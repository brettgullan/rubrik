import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ----------------------------------------------------------------------------

import {
  Tabs as RTabs,
  TabList as RTabList,
  Tab as RTab,
  TabPanel as RTabPanel,
} from 'react-tabs'
import convertToRebass from '../../../utils/convert-to-rebass'

// ----------------------------------------------------------------------------

export const Tabs = (props) => {
  const Component = convertToRebass(styled(RTabs)``)
  return <Component className="tabs" {...props} />
}

export const Tab = (props) => {
  const Component = convertToRebass(styled(RTab)``)
  return <Component className="tab" {...props} />
}
Tab.tabsRole = 'Tab'

export const TabList = ({ sx, ...rest }) => {
  const Component = convertToRebass(styled(RTabList)``)
  return (
    <Component
      className="tablist"
      sx={{
        listStyleType: 'none',
        display: 'flex',
        ...sx,
      }}
      {...rest}
    />
  )
}
TabList.tabsRole = 'TabList'

export const TabPanel = ({ sx, ...rest }) => {
  const Component = convertToRebass(styled(RTabPanel)``)
  return (
    <Component
      className="tabpanel"
      sx={{
        display: 'none',
        '&.is-selected': {
          display: 'block',
        },
        '&.react-tabs__tab-panel--selected': {
          display: 'block',
        },
        ...sx,
      }}
      {...rest}
    />
  )
}
TabPanel.tabsRole = 'TabPanel'

/*
export const Tabs = forwardRef((props, ref) => {
  const Component = convertToRebass(RTabs)
  return <Component ref={ref} {...props} />
})

export const Tab = forwardRef((props, ref) => {
  const Component = convertToRebass(RTab)
  return <Component ref={ref} {...props} />
})
Tab.tabsRole = 'Tab'

export const TabList = forwardRef(({ sx, ...rest }, ref) => {
  const Component = convertToRebass(RTabList)
  return (
    <Component
      ref={ref}
      sx={{
        listStyleType: 'none',
        display: 'flex',
        ...sx,
      }}
      {...rest}
    />
  )
})
TabList.tabsRole = 'TabList'

export const TabPanel = forwardRef(({ sx, ...rest }, ref) => {
  const Component = convertToRebass(RTabPanel)
  return (
    <Component
      ref={ref}
      sx={{
        display: 'none',
        '&.is-selected': {
          display: 'block',
        },
        ...sx,
      }}
      {...rest}
    />
  )
})
TabPanel.tabsRole = 'TabPanel'
*/
