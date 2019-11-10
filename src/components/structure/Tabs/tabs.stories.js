import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { useTheme } from 'emotion-theming'

// ----------------------------------------------------------------------------

import theme from '../../../theme'
import { Tab, Tabs, TabBar, TabPanel } from '.'
import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Tabs',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

const { text } = theme

export const Primary = () => {
  const sx = {
    '.tab': {
      p: 3,
      ...text.longPrimer,
    },
  }

  return (
    <Tabs>
      <Flex flexDirection="column">
        <TabBar>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabBar>

        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
      </Flex>
    </Tabs>
  )
}
Primary.story = {
  name: 'Default',
}
