import React, { Fragment, useContext } from 'react';
import { Context as AuthContext } from '../../../AuthContext';
import { BasicLayout } from '../../layouts/BasicLayout';
import { SubmitButton } from '../../atoms/SubmitButton';
import NotRegisteredUserScreen from '../NotRegisteredUserScreen';

export default () => {
  const { state } = useContext(AuthContext);
  console.log('🚀 ~ file: index.js:14 ~ state:', state);

  return state.isAuth ? (
    <BasicLayout title="My account" subtitle="Account Information">
      <SubmitButton text="Logout" onClick={() => console.log('hola')} />
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
};
