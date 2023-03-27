import React from 'react';
import { useParams } from 'react-router-dom';
import { BasicLayout } from '../../layouts/BasicLayout';
import { ListOfPhotocards } from '../../container/ListOfPhotocards';

export const HomeScreen = () => {
  const params = useParams();
  return (
    <BasicLayout
      title="Tu app de fotos"
      subtitle="Con Igram puedes encontrar fotos favoritas"
      showCategories>
      <ListOfPhotocards categoryId={params.id} />
    </BasicLayout>
  );
};
