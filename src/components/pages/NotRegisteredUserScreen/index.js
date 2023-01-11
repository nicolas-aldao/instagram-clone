import React from 'react';
import { Context } from '../../../Context';
import { UserForm } from '../../organisms/UserForm';
import { useRegisterMutation } from '../../../hooks/useRegisterMutation';
import { useLoginMutation } from '../../../hooks/useLoginMutation';

export const NotRegisteredUserScreen = () => {
  const { registerMutation, loading, error } = useRegisterMutation();
  const {
    login,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(data => {
            const { signup } = data.data;
            activateAuth(signup);
          });
        };

        const onSubmitLogin = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          login({ variables }).then(data => {
            const { login } = data.data;
            console.log(login);
            activateAuth(login);
          });
        };

        const errorMsg = error && 'El usuario ya existe.';

        const errorMsgLogin =
          errorLogin && 'El usuario o contraseña incorrecto.';

        return (
          <>
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
            <UserForm
              disabled={loadingLogin}
              error={errorMsgLogin}
              title="Iniciar sesion"
              onSubmit={onSubmitLogin}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
