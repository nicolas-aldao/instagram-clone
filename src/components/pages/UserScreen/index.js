import React, { Fragment, useContext } from 'react';
import { Layout } from '../../layouts/BasicLayout';
import { Context } from '../../../Context';
import { SubmitButton } from '../../atoms/SubmitButton';

export const UserScreen = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Layout title="My account" subtitle="My User">
      <SubmitButton text="Logout" onClick={removeAuth} />
    </Layout>
  );
};
