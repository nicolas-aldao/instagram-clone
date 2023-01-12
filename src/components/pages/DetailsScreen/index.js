import React from 'react';
import { useParams } from 'react-router-dom';
import { BasicLayout } from '../../layouts/BasicLayout';
import { PhotocardWithQuery } from '../../container/PhotocardWithQuery';

export default () => {
  const params = useParams();

  return (
    <BasicLayout title={`Fotografía ${Number(params.detailId) + 1}`}>
      <PhotocardWithQuery id={params.detailId} />
    </BasicLayout>
  );
};