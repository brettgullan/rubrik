import React, { createRef } from 'react'

import { useTabs } from '@zendeskgarden/container-tabs'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Tabs, Tab, TabList, TabPanel } from '.'
import { Box, Flex } from 'rebass'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Tabs',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return (
    <Tabs>
      <TabList>
        <Tab index={1} tab="1">
          Tab 1
        </Tab>
        <Tab index={2} tab="2">
          Tab 2
        </Tab>
        <Tab index={2} tab="3">
          Tab 3
        </Tab>
      </TabList>

      <TabPanel index={1} tab="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TabPanel>
      <TabPanel index={2} tab="2">
        Tempor id eu nisl nunc. Amet cursus sit amet dictum sit. Gravida arcu ac
        tortor dignissim convallis aenean. Lectus arcu bibendum at varius vel
        pharetra. Commodo odio aenean sed adipiscing diam donec adipiscing. Amet
        consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.
        Adipiscing elit pellentesque habitant morbi tristique senectus. Tempor
        nec feugiat nisl pretium fusce id. Diam sollicitudin tempor id eu nisl.
        Scelerisque in dictum non consectetur a erat nam at lectus. Eget velit
        aliquet sagittis id consectetur purus.
      </TabPanel>
      <TabPanel index={3} tab="3">
        Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Orci a
        scelerisque purus semper eget. Sit amet volutpat consequat mauris.
        Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque
        eu. Consequat ac felis donec et odio pellentesque diam volutpat commodo.
        Consequat nisl vel pretium lectus quam id leo in. Malesuada fames ac
        turpis egestas maecenas pharetra convallis. Et egestas quis ipsum
        suspendisse. Dictum non consectetur a erat nam at lectus. Etiam tempor
        orci eu lobortis elementum nibh tellus molestie nunc. Nisl condimentum
        id venenatis a condimentum vitae sapien. Dictum sit amet justo donec
        enim diam vulputate. Interdum velit laoreet id donec ultrices tincidunt
        arcu non sodales.
      </TabPanel>
    </Tabs>
  )
}
