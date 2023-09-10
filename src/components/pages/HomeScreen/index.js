import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../../Context';
import { BasicLayout } from '../../layouts/BasicLayout';
import { ListOfPhotocards } from '../../container/ListOfPhotocards';
import { Modal } from '../../organisms/Modal';

export const HomeScreen = () => {
  const params = useParams();
  const {
    state: { showNotRegisteredModal },
  } = useContext(Context);

  return (
    <BasicLayout title="" subtitle="" showCategories marginTop="110px">
      {showNotRegisteredModal ? <Modal /> : null}
      <ListOfPhotocards categoryId={params.id} />
    </BasicLayout>
  );
};
