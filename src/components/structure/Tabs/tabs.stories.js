import React from 'react'

import { useTabs } from '@zendeskgarden/container-tabs'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
const tabRefs = tabs.map(() => createRef(null))

// ----------------------------------------------------------------------------

const Tabs = () => {
  const {
    selectedItem,
    getTabProps,
    getTabListProps,
    getTabPanelProps,
  } = useTabs()
  const tabComponents = []
  const tabPanels = []

  tabs.forEach((tab, index) => {
    tabComponents.push(
      <li
        {...getTabProps({
          item: tab,
          index,
          ref: tabRefs[index],
          key: tab,
          style: {
            borderBottom: `3px solid ${
              tab === selectedItem ? '#1f73b7' : 'transparent'
            }`,
          },
        })}
      >
        {tab}
      </li>
    )

    tabPanels.push(
      <div
        {...getTabPanelProps({
          index,
          item: tab,
          key: tab,
          style: {
            padding: '10px 0',
            borderTop: '1px solid',
          },
        })}
      >
        {tab} Content
      </div>
    )
  })

  return (
    <>
      <ul
        {...getTabListProps({
          style: {
            display: 'flex',
          },
        })}
      >
        {tabComponents}
      </ul>
      {tabPanels}
    </>
  )
}

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Tabs',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return <Tabs />
}
