import React from 'react'
import { useInputValue } from '../../../hooks/useInputValue'
import { Badge } from '../../atoms/Badge';
import { FormContainer, Form, Input, Button, Title } from './styles'

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
    <FormContainer>
      <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <Button disabled={disabled} >{title}</Button>
        {error && <Badge content={error} fontColor='#d71919' backgroundColor='#FFCCBC'/>}
      </Form>
    </FormContainer>
  )
}
