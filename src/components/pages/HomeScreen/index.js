import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../Context';
import { BasicLayout } from '../../layouts/BasicLayout';
import { ListOfPhotocards } from '../../container/ListOfPhotocards';

export const HomeScreen = () => {
  const { state } = useContext(Context);

  const params = useParams();
  return (
    <BasicLayout title="" subtitle="" showCategories>
      <p>{JSON.stringify(state.screenType)}</p>
      <ListOfPhotocards categoryId={params.id} />
    </BasicLayout>
  );
};
