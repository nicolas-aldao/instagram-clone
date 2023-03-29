import React, { Fragment } from 'react'
import { useInputValue } from '../../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const ProfileForm = ({ onSubmit, title, disabled, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const firstname = useInputValue('')
  const lastname = useInputValue('')

  const handleSubmit = (event)=> {
    event.preventDefault()
    onSubmit({
        email: email.value,
        password: password.value,
        firstname: firstname.value,
        lastname: lastname.value
    })
}

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <Input placeholder='Firstname' type='firstname' {...firstname} disabled={disabled} />
        <Input placeholder='Lastname' type='lastname' {...lastname} disabled={disabled} />
        <Button disabled={disabled} >{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </Fragment>
  )
}
