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
import Checkbox from '.'
import { Submit } from '..'

// ----------------------------------------------------------------------------

const CheckboxSchema = Yup.object().shape({
  checkbox: Yup.boolean().required('Please enter something.'),
})

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Checkbox',
  decorators: [withKnobs],
}

const handleSubmit = (values) => {
  console.log('Submitted ...')
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
    <Box>
      <Formik
        validationSchema={CheckboxSchema}
        validateOnBlur={true}
        onSubmit={handleSubmit}
        initialValues={{ checkbox: false }}
      >
        {(props) => (
          <Form>
            <Box py={4}>
              <Checkbox name="checkbox" size={size} />
            </Box>
            <Submit>Submit</Submit>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
Working.story = {
  name: 'Form',
}
