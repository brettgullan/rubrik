import React, { Component } from 'react'

import Form from './form'
import Confirm from './confirm'
import Error from './error'

// ----------------------------------------------------------------------------

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

// ----------------------------------------------------------------------------

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = { display: 'FORM' }
  }

  handleSubmit = (values, actions) => {
    const handleSuccess = () => {
      this.setState({ display: 'CONFIRM' })
    }

    const handleError = (error) => {
      this.setState({ display: 'ERROR', error })
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
    const { display } = this.state
    switch (display) {
      case 'CONFIRM':
        return <Confirm />
      case 'ERROR':
        return <Error />
      default:
        return <Form handleSubmit={this.handleSubmit} />
    }
  }
}

export default ContactForm
