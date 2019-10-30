import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

/*
import { Field as FormikField } from '../../common'

// ----------------------------------------------------------------------------

const Field = ({ sx, ...rest }) => (
  <FormikField
    sx={{
      fontFamily: 'sans',
      fontWeight: 300,
      fontSize: 2,
      lineHeight: 2,
      p: 4,
      ...sx,
    }}
    {...rest}
  />
)
*/

import { Box } from 'rebass'
import styled from '@emotion/styled'
import { compose, border } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Input = styled((props) => <Box as="input" {...props} />, {
  shouldForwardProp,
})(
  {
    border: 'none',
  },
  compose(border)
)

const TextArea = styled.textarea`
  border: none;
`

// ----------------------------------------------------------------------------

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

// ----------------------------------------------------------------------------

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string().required('Required'),
})

const initialState = { name: '', email: '', message: '' }

// ----------------------------------------------------------------------------

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = { message: '' }
  }

  handleSubmit = (values, actions) => {
    const handleSuccess = () => {
      this.setState({ message: 'Done!' })
    }

    const handleError = (error) => {
      this.setState({ message: 'Error', error })
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  render() {
    const { message } = this.state
    return (
      <Formik
        initialValues={initialState}
        validationSchema={ContactSchema}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form name="contact" data-netlify="true">
            <h1>{message}</h1>
            <div>
              <Field name="name">{({ field }) => <Input {...field} />}</Field>
              <ErrorMessage name="name" />
            </div>
            <div>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            {/* 
            <div>
              <Field name="message" component="textarea" />
              <ErrorMessage name="message" />
            </div>
            */}
            <div>
              <Field name="message">
                {({ field }) => <TextArea {...field} />}
              </Field>
              <ErrorMessage name="message" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    )
  }
}
export default ContactForm
