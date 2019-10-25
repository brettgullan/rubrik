import React from 'react'
import { Flex, Text } from 'rebass'

import Cloudinary from '../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import Card from './card'
import { Standard as Image } from './images'

// ----------------------------------------------------------------------------

const withCloudinary = (storyFn) => (
  <Cloudinary
    options={{
      cloud_name: 'caradvice',
      private_cdn: true,
      secure_distribution: 'media.caradvice.com.au',
      secure: true,
    }}
  >
    {storyFn()}
  </Cloudinary>
)

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Cards',
  decorators: [withCloudinary],
}

// ----------------------------------------------------------------------------

export const Default = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <Card>
      <Image image={image} />
    </Card>
  )
}
