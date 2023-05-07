import React, { useState, useContext, useEffect } from 'react';
import { SpinnerAtom } from '../../atoms/Spinner';
import { UserForm } from '../../organisms/UserForm';
import { ProfileForm } from '../../organisms/ProfileForm';
import { Context } from '../../../Context';
import { SpinnerContainer } from './styles';

export default () => {
  const {
    state: { errorMessage, screenType },
    signIn,
    signUp,
    clearErrorMessages,
  } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const handleOnLoading = propValue => {
    setLoading(propValue);
  };

  return (
    <>
      {loading && (
        <SpinnerContainer isMobile={screenType?.isMobile}>
          <SpinnerAtom />
        </SpinnerContainer>
      )}
      <ProfileForm onLoading={handleOnLoading} title="Sign up" />
      <UserForm onLoading={handleOnLoading} title="Sign in" />
    </>
  );
};
