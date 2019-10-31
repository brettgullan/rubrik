import React, { useState } from 'react'

import { Flex } from 'rebass'

import Form from './form'
import Confirm from './confirm'
import Error from './error'

// ----------------------------------------------------------------------------

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

// ----------------------------------------------------------------------------

const NewsletterSubscribe = () => {
  const [display, setDisplay] = useState('DEFAULT')
  const [error, setError] = useState()

  const handleSubmit = (values, actions) => {
    const handleSuccess = () => {
      setDisplay('CONFIRM')
    }

    const handleError = (error) => {
      setError(error)
      setDisplay('ERROR')
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  return (
    <Flex
      p={6}
      bg="#001722"
      sx={{
        justifyContent: 'center',
        width: '100%',
        '& form': {
          width: '100%',
          maxWidth: 'article',
        },
        color: 'white.0',
      }}
    >
      {(() => {
        switch (display) {
          case 'CONFIRM':
            return <Confirm />
          case 'ERROR':
            return <Error />
          default:
            return <Form handleSubmit={handleSubmit} />
        }
      })()}
    </Flex>
  )
}

export default NewsletterSubscribe
