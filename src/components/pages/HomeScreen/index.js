import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../organisms/Header';
import { ListOfCategories } from '../../organisms/ListOfCategories';
import { ListOfPhotocards } from '../../container/ListOfPhotocards';

export const HomeScreen = () => {
  const params = useParams();
  return (
    <>
      <ListOfPhotocards categoryId={params.id} />
    </>
  );
};
