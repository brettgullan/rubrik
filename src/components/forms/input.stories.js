import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { Input } from '.'
// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Input',
}

const onChange = () => {}

// ----------------------------------------------------------------------------

export const Placeholder = () => {
  return <Input placeholder="This is an empty input field" />
}

export const Primary = () => {
  return (
    <Input tx="testing" onChange={onChange} value="This is an input field" />
  )
}
Primary.story = {
  name: 'Default',
}

export const Valid = () => {
  return (
    <Input
      valid={true}
      onChange={onChange}
      value="This is a valid input field"
    />
  )
}

export const Error = () => {
  return (
    <Input
      error={true}
      onChange={onChange}
      value="This is an error input field"
    />
  )
}
