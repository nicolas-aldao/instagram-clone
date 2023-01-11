import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../layouts/BasicLayout';
import { ListOfPhotocards } from '../../container/ListOfPhotocards';

export const HomeScreen = () => {
  const params = useParams();
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos">
      <ListOfPhotocards categoryId={params.id} />
    </Layout>
  );
};
