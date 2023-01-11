import React, { Fragment, useContext } from 'react';
import { Context } from '../../../Context';
import { SubmitButton } from '../../atoms/SubmitButton';

export const UserScreen = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <SubmitButton text='Logout' onClick={removeAuth}/>
    </>
  );
};
