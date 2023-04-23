import React, { useState } from 'react';
import { useInputValue } from '../../../hooks/useInputValue';
import { Badge } from '../../atoms/Badge';
import {
  FormContainer,
  Form,
  Input,
  Button,
  Title,
  Error,
} from '../UserForm/styles';

export const ProfileForm = ({ onSubmit, title, disabled, error }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const firstname = useInputValue('');
  const lastname = useInputValue('');
  const [frontError, setFrontError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (
      email.value === '' ||
      password.value === '' ||
      firstname.value === '' ||
      lastname.value === ''
    ) {
      setFrontError('All fields are required');
      return;
    }
    onSubmit({
      email: email.value,
      password: password.value,
      firstname: firstname.value,
      lastname: lastname.value,
    });
  };

  return (
    <FormContainer>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="Email" {...email} disabled={disabled} />
        <Input
          placeholder="Password"
          type="password"
          {...password}
          disabled={disabled}
        />
        <Input
          placeholder="Firstname"
          type="firstname"
          {...firstname}
          disabled={disabled}
        />
        <Input
          placeholder="Lastname"
          type="lastname"
          {...lastname}
          disabled={disabled}
        />
        <Button disabled={disabled}>{title}</Button>
        {error && <Badge content={error} fontColor='#d71919' backgroundColor='#FFCCBC'/>}
        {frontError !== '' && <Badge content={frontError} fontColor='#d71919' backgroundColor='#FFCCBC'/>}
      </Form>
    </FormContainer>
  );
};
