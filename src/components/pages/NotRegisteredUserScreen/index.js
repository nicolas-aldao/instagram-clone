import React, { useState, useContext, useEffect } from 'react';
import { SpinnerAtom } from '../../atoms/Spinner';
import { UserForm } from '../../organisms/UserForm';
import { ProfileForm } from '../../organisms/ProfileForm';
import { Context } from '../../../Context';
import { SpinnerContainer } from './styles';

export default () => {
  const { state: { errorMessage, screenType }, signIn, signUp, clearErrorMessages } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = async ({ email, password }) => {
    setLoading(true);
    await signIn({ email, password }, () => {
      console.log('logged');
    });
    setLoading(false);
  };
  const onSubmit = async ({ email, password, firstname, lastname }) => {
    setLoading(true);
    await signUp({ email, password, firstname, lastname }, () => {
      console.log('signup');
    });
    setLoading(false);
  };

  useEffect(() => {
    console.log('loading :' + loading);
  }, [loading]);

  // const errorMsg = state.errorMessage && 'The user already exists.';

  const errorMsgLogin =
    errorMessage && 'The user or password is incorrect.';

  return (
    <>
      {true && (
        <SpinnerContainer isMobile={screenType.isMobile}>
          <SpinnerAtom />
        </SpinnerContainer>
      )}
      <ProfileForm
        // disabled={loading} // antes: loading
        error={errorMsgLogin}
        title="Sign up"
        onSubmit={onSubmit}
      />
      <UserForm
        // disabled={loading} // antes: loadingLogin
        error={errorMsgLogin}
        title="Sign in"
        onSubmit={onSubmitLogin}
      />
    </>
  );
};
