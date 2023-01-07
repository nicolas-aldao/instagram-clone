import React from 'react';
import Header from './components/organisms/Header';
import { ListOfPhotocards } from './components/container/ListOfPhotocards';
import { PhotocardWithQuery } from './components/container/PhotocardWithQuery';
import { TestForm } from './components/organisms/TestForm';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Header />
      {detailId ? (
        <PhotocardWithQuery id={detailId} />
      ) : (
        <ListOfPhotocards />
      )}
    </>
  );
};
