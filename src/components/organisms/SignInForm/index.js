import React, { useContext } from 'react';
import { useInputValue } from '../../../hooks/useInputValue';
import { Badge } from '../../atoms/Badge';
import { Context } from '../../../Context';
import { FormContainer, Form, Input, Button, Title } from './styles';

export const SignInForm = ({ title, disabled, onLoading }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const {
    state: { error, screenType },
    signIn,
    signUp,
    clearErrorMessages,
  } = useContext(Context);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  const onSubmit = async ({ email, password }) => {
    onLoading(true);
    await signIn({ email, password }, () => {
      console.log('logged');
    });
    onLoading(false);
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
        <Button disabled={disabled}>{title}</Button>
        {error?.type === 'login' && (
          <Badge
            content={error?.msg}
            fontColor="#d71919"
            backgroundColor="#FFCCBC"
          />
        )}
      </Form>
    </FormContainer>
  );
};
