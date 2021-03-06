import React from 'react'
import {
  withKnobs,
  number,
  optionsKnob as options,
  text,
} from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

// ----------------------------------------------------------------------------

import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

import { Box } from 'rebass'
import Toggle from '.'

// ----------------------------------------------------------------------------

const SwitchSchema = Yup.object().shape({
  switch: Yup.boolean().required('Please enter something.'),
})

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Toggle',
  decorators: [withKnobs, withA11y],
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
  return (
    <Box>
      <Formik
        validationSchema={SwitchSchema}
        validateOnBlur={true}
        onSubmit={console.log}
        initialValues={{ switch: false }}
      >
        {(props) => (
          <Form>
            <Box py={4}>
              <Toggle name="switch" size={size} useField={useField} />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
Working.story = {
  name: 'Form',
}
