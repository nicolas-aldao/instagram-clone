import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../organisms/Header';
import { ListOfCategories } from '../../organisms/ListOfCategories';
import { PhotocardWithQuery } from '../../container/PhotocardWithQuery';

const DetailsScreen = ({ detailId }) => {
  const params = useParams();
//   const urlParams = new window.URLSearchParams(window.location.search);
//   const detailId = urlParams.get("detailId");
  return (
    <>
      <PhotocardWithQuery id={params.detailId} />
    </>
  );
};

export default DetailsScreen;
