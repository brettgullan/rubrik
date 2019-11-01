import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
              placeholder="your.name@email.com"
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
                paddingLeft: ['24px', '30px'],
              }}
            />
            <Submit
              size="xl"
              sx={{
                flexShrink: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                px: 5,
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </Submit>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export default Component
