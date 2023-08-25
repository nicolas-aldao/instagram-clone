import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BasicLayout } from '../../layouts/BasicLayout';
import { ListOfPhotocards } from '../../container/ListOfPhotocards';

export const HomeScreen = () => {
  const params = useParams();
  return (
    <BasicLayout title="" subtitle="" showCategories marginTop="110px">
      <ListOfPhotocards categoryId={params.id} />
    </BasicLayout>
  );
};
