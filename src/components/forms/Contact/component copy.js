import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

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
    this.state = initialState
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  render() {
    const { name, email, message } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name:{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}

export default ContactForm
