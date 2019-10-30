import React from 'react'
import {
  withKnobs,
  number,
  optionsKnob as options,
  text,
} from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Flex } from 'rebass'
import { Input } from '.'

// ----------------------------------------------------------------------------

const InputSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'That input is too short.')
    .max(50, 'Sorry, that input is too long.')
    .required('Please enter something; this is a required field.'),
})

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Input',
  decorators: [withKnobs],
}

const handleSubmit = (values) => {
  console.log(values)
}
const sizes = {
  Small: 'sm',
  Default: 'md',
  Large: 'lg',
}

// ----------------------------------------------------------------------------

export const Working = () => {
  const size = options('Size', sizes, 'md', {
    display: 'select',
  })
  const fontFamily = options(
    'Font Family',
    { Text: 'text', Title: 'title' },
    'text',
    {
      display: 'select',
    }
  )
  const borderRadius = number('Border Radius', 1)
  return (
    <Formik
      validationSchema={InputSchema}
      validateOnBlur={true}
      onSubmit={handleSubmit}
      initialValues={{ name: '' }}
    >
      {(props) => (
        <Form>
          <Input
            name="name"
            size={size}
            sx={{
              borderRadius,
              fontFamily,
            }}
            placeholder="Input something ..."
          />
        </Form>
      )}
    </Formik>
  )
}
Working.story = {
  name: 'Form',
}

/*
export const Placeholder = () => {
  return <Input placeholder="This is an empty input field" />
}

export const Primary = () => {
  const size = options('Size', sizes, 'md', {
    display: 'select',
  })
  const fontFamily = options(
    'Font Family',
    { Text: 'text', Title: 'title' },
    'text',
    {
      display: 'select',
    }
  )
  const borderRadius = number('Border Radius', 1)
  return (
    <Input
      size={size}
      sx={{
        borderRadius,
        fontFamily,
      }}
      onChange={onChange}
      value="This is an input field"
    />
  )
}
Primary.story = {
  name: 'Default',
}

export const Valid = () => {
  const size = options('Size', sizes, 'md', {
    display: 'select',
  })
  const fontFamily = options(
    'Font Family',
    { Text: 'text', Title: 'title' },
    'text',
    {
      display: 'select',
    }
  )
  const borderRadius = number('Border Radius', 1)
  return (
    <Input
      valid={true}
      size={size}
      sx={{
        borderRadius,
        fontFamily,
      }}
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
      sx={{
        '&.error': {
          textTransform: 'uppercase',
        },
      }}
    />
  )
}
*/
