import React, { Fragment } from 'react'
import { useInputValue } from '../../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, disabled, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event)=> {
    event.preventDefault()
    onSubmit({
        email: email.value,
        password: password.value
    })
}

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <Button disabled={disabled} >{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </Fragment>
  )
}
