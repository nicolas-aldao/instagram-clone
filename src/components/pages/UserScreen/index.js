import React, { Fragment, useContext } from 'react';
import { Context } from '../../../Context';
import { BasicLayout } from '../../layouts/BasicLayout';
import { SubmitButton } from '../../atoms/SubmitButton';
import NotRegisteredUserScreen from '../NotRegisteredUserScreen';

export default () => {
  const { state, signOut } = useContext(Context);
  console.log('🚀 ~ file: index.js:14 ~ state:', state);

  return state.isAuth ? (
    <BasicLayout title="My account" subtitle="Account Information">
      <h4>Welcome {state.firstname ? state.firstname : state.email} {` ${state.lastname}`}!</h4>
      <SubmitButton text="Logout" onClick={() => signOut()} />
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
};
