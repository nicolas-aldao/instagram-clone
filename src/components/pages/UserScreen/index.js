import React, { Fragment, useContext } from 'react';
import { BasicLayout } from '../../layouts/BasicLayout';
import { Context } from '../../../Context';
import { SubmitButton } from '../../atoms/SubmitButton';

export default () => {
  const { removeAuth } = useContext(Context);
  return (
    <BasicLayout title="My account" subtitle="Account Information">
      <SubmitButton text="Logout" onClick={removeAuth} />
    </BasicLayout>
  );
};
