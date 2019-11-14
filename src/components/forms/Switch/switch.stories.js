import React from 'react'
import {
  withKnobs,
  number,
  optionsKnob as options,
  text,
} from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Box, Flex } from 'rebass'
import Switch from '.'

// ----------------------------------------------------------------------------

const SwitchSchema = Yup.object().shape({
  switch: Yup.boolean().required('Please enter something.'),
})

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Switch',
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
      validationSchema={SwitchSchema}
      validateOnBlur={true}
      onSubmit={handleSubmit}
      initialValues={{ name: '' }}
    >
      {(props) => (
        <Form>
          <Box py={4}>
            <Switch name="switch" size={size} />
          </Box>
        </Form>
      )}
    </Formik>
  )
}
Working.story = {
  name: 'Form',
}
