import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Flex } from 'rebass'
import { Input, Submit } from '../../components/forms'

// ----------------------------------------------------------------------------

const InputSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'That input is too short.')
    .max(50, 'Sorry, that input is too long.')
    .required('Please enter something; this is a required field.'),
})

const initialState = { name: '' }

// ----------------------------------------------------------------------------

export const Component = ({ handleSubmit }) => {
  return (
    <Formik
      validationSchema={InputSchema}
      validateOnBlur={true}
      onSubmit={handleSubmit}
      initialValues={initialState}
    >
      {(props) => (
        <Form name="newsletter-subscribe">
          <Flex>
            <Input
              name="name"
              placeholder="Input something ..."
              sx={{
                borderTopLeftRadius: '128px',
                borderBottomLeftRadius: '128px',
                border: 0,
                '&:focus': {
                  outline: 'none',
                },
                '&.error, &.valid': {
                  border: 0,
                  '&:focus': {
                    outline: 'none',
                  },
                },
              }}
            />
            <Submit
              size="xl"
              sx={{
                flexShrink: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              Submit
            </Submit>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export default Component
