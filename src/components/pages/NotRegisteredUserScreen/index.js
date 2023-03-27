import React, { useContext } from 'react';
import { UserForm } from '../../organisms/UserForm';
import { Context as AuthContext } from '../../../AuthContext';

export default () => {
  const { state, signIn, clearErrorMessages } = useContext(AuthContext);
  console.log("🚀 ~ file: index.js:8 ~ state:", state)

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

  // const errorMsg = state.errorMessage && 'The user already exists.';

  const errorMsgLogin =
    state.errorMessage && 'The user or password is incorrect.yee3';

  return (
    // const onSubmit = ({ email, password }) => {
    //   const input = { email, password };
    //   const variables = { input };
    //   registerMutation({ variables }).then(data => {
    //     const { signup } = data.data;
    //     activateAuth(signup);
    //   });
    // };

    <>
      {/* <UserForm
              disabled={loading}
              error={errorMsg}
              title="Sign up"
              onSubmit={onSubmit}
            /> */}
      <UserForm
        disabled={false} // antes: loadingLogin
        error={errorMsgLogin}
        title="Sign in"
        onSubmit={onSubmitLogin}
      />
    </>
  );
};
