import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Tab, Tabs, TabList, TabPanel } from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Tabs',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return (
    <Tabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <TabList>
        <Tab selectedClassName="is-selected">Tab 1</Tab>
        <Tab selectedClassName="is-selected">Tab 2</Tab>
        <Tab selectedClassName="is-selected">Tab 3</Tab>
      </TabList>
      <TabPanel selectedClassName="is-selected">Panel 1</TabPanel>
      <TabPanel selectedClassName="is-selected">Panel 2</TabPanel>
      <TabPanel selectedClassName="is-selected">Panel 3</TabPanel>
    </Tabs>
  )
}
Primary.story = {
  name: 'Default',
}
