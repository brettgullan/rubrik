import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Box } from 'rebass'
import { Input, Message, Submit, TextArea } from './styled'

// ----------------------------------------------------------------------------

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'That name is too short; please enter your full name.')
    .max(50, 'Sorry, that name is too long.')
    .required('Please enter your name; this is a required field.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter your enail address; this is a required field.'),
  message: Yup.string().required(
    'Please enter a message; this is a required field.'
  ),
})

const initialState = { name: '', email: '', message: '' }

// ----------------------------------------------------------------------------

const Component = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <Form name="contact" data-netlify="true">
          <Box mb={4}>
            <Field name="name">
              {({ field }) => (
                <Input
                  placeholder="Your name"
                  {...field}
                  valid={touched[field.name] && !errors[field.name]}
                  error={touched[field.name] && errors[field.name]}
                />
              )}
            </Field>
            <ErrorMessage name="name">
              {(msg) => <Message type="error">{msg}</Message>}
            </ErrorMessage>
          </Box>

          <Box mb={4}>
            <Field name="email" type="email">
              {({ field }) => (
                <Input
                  placeholder="Email address"
                  {...field}
                  valid={touched[field.name] && !errors[field.name]}
                  error={touched[field.name] && errors[field.name]}
                />
              )}
            </Field>
            <ErrorMessage name="email">
              {(msg) => <Message type="error">{msg}</Message>}
            </ErrorMessage>
          </Box>

          <Box mb={4}>
            <Field name="message">
              {({ field }) => (
                <TextArea
                  placeholder="Message &hellip;"
                  {...field}
                  valid={touched[field.name] && !errors[field.name]}
                  error={touched[field.name] && errors[field.name]}
                />
              )}
            </Field>
            <ErrorMessage name="message">
              {(msg) => <Message type="error">{msg}</Message>}
            </ErrorMessage>
          </Box>

          <Submit
            sx={{ display: 'block', mx: 'auto' }}
            disabled={!isValid || isSubmitting}
          >
            Send
          </Submit>
        </Form>
      )}
    </Formik>
  )
}

export default Component