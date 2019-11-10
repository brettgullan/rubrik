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

        <TabPanel sx={{ p: 5, bg: 'white.0' }}>
          Ac felis donec et odio pellentesque diam. Risus pretium quam vulputate
          dignissim suspendisse in. Orci a scelerisque purus semper eget.
          Pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et.
        </TabPanel>
        <TabPanel sx={{ p: 5, bg: 'white.0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
      </Flex>
    </Tabs>
  )
}
Primary.story = {
  name: 'Default',
}
