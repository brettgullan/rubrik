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
import { Checkbox, Label } from '@rebass/forms'
import Toggle from '.'
import { Submit } from '../'

// ----------------------------------------------------------------------------

const SwitchSchema = Yup.object().shape({
  switch: Yup.boolean().required('Please enter something.'),
})

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Toggle',
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
        validationSchema={SwitchSchema}
        validateOnBlur={true}
        onSubmit={handleSubmit}
        initialValues={{ switch: false }}
      >
        {(props) => (
          <Form>
            <Box py={4}>
              <Toggle name="switch" size={size} />
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
