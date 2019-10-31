import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Box, Flex } from 'rebass'
import { position, size } from 'polished'

// ----------------------------------------------------------------------------

import Form from './form'
import Confirm from './confirm'
import Error from './error'

import { FullBleed } from '../../components/structure'

// ----------------------------------------------------------------------------

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

// ----------------------------------------------------------------------------

const transitionDuration = 250

const formPanelStyles = {
  ...position('absolute', 0),
  ...size('100%'),
  justifyContent: 'center',
  alignItems: 'center',
  bg: '#001722',
}

const transitionStyles = {
  '&.enter': {
    opacity: 0,
  },
  '&.enter-active': {
    opacity: 1,
    transition: 'opacity 250ms',
  },

  '&.exit': {
    opacity: 1,
  },
  '&.exit-active': {
    opacity: 0,
    transition: 'opacity 250ms',
  },
}

// ----------------------------------------------------------------------------

const NewsletterSubscribe = () => {
  const [display, setDisplay] = useState('DEFAULT')
  const [error, setError] = useState()

  const showConfirm = display === 'CONFIRM'
  const showError = display === 'ERROR'
  const showDefault = display === 'DEFAULT'

  const handleSubmit = (values, actions) => {
    const handleSuccess = () => {
      setDisplay('CONFIRM')
    }

    const handleError = (error) => {
      setError(error)
      setDisplay('ERROR')
    }

    /*
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(handleSuccess)
      .catch(handleError)
    */

    console.log(values)

    new Promise((resolve, reject) =>
      setTimeout(() => {
        return values.name === 'error'
          ? reject('Error')
          : resolve('Promise A win!')
      }, 1000)
    )
      .then(handleSuccess)
      .catch(handleError)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 'article',
        mx: 'auto',
        bg: '#001722',
        height: '400px',
      }}
    >
      <CSSTransition
        in={showDefault}
        timeout={transitionDuration}
        unmountOnExit
      >
        <Flex
          p={6}
          sx={{
            ...formPanelStyles,
            '& form': {
              width: '100%',
            },
            color: 'white.0',

            ...transitionStyles,
          }}
        >
          <Form handleSubmit={handleSubmit} />
        </Flex>
      </CSSTransition>

      <CSSTransition
        in={showConfirm}
        timeout={transitionDuration}
        unmountOnExit
      >
        <Confirm
          sx={{
            ...formPanelStyles,
            color: 'white.0',

            ...transitionStyles,
          }}
        />
      </CSSTransition>

      <CSSTransition in={showError} timeout={transitionDuration} unmountOnExit>
        <Error
          sx={{
            ...formPanelStyles,
            color: 'white.0',

            ...transitionStyles,
          }}
        />
      </CSSTransition>
    </Box>
  )
}

export default NewsletterSubscribe
