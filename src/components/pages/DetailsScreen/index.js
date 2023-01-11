import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../layouts/BasicLayout';
import { PhotocardWithQuery } from '../../container/PhotocardWithQuery';

const DetailsScreen = ({ detailId }) => {
  const params = useParams();

  return (
    <Layout title={`Fotografía ${Number(params.detailId) + 1}`}>
      <PhotocardWithQuery id={params.detailId} />
    </Layout>
  );
};

export default DetailsScreen;
