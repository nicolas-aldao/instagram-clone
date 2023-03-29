import React, { useContext } from 'react';
import { UserForm } from '../../organisms/UserForm';
import { ProfileForm } from '../../organisms/ProfileForm';
import { Context as AuthContext } from '../../../AuthContext';

export default () => {
  const { state, signIn, signUp, clearErrorMessages } = useContext(AuthContext);
  console.log('🚀 ~ file: index.js:8 ~ state:', state);

  const onSubmitLogin = ({ email, password }) => {
    signIn({ email, password }, () => {
      console.log('logged');
    });
    // .then(data => {
    //   const { login } = data.data;
    //   console.log(login);
    //   activateAuth(login);
    // });
  };
  const onSubmit = ({ email, password, firstname, lastname }) => {
    //const input = { email, password };
    //const variables = { input };
    signUp({ email, password, firstname, lastname }, () => {
      console.log('signup');
    });

    // .then(data => {
    //   const { signup } = data.data;
    //   activateAuth(signup);
    // });
  };

  // const errorMsg = state.errorMessage && 'The user already exists.';

  const errorMsgLogin =
    state.errorMessage && 'The user or password is incorrect.';

  return (
    <>
      <ProfileForm
        disabled={false} // antes: loading
        error={errorMsgLogin}
        title="Sign up"
        onSubmit={onSubmit}
      />
      <UserForm
        disabled={false} // antes: loadingLogin
        error={errorMsgLogin}
        title="Sign in"
        onSubmit={onSubmitLogin}
      />
    </>
  );
};
