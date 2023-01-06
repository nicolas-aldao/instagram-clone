import React from 'react';
import Header from './components/organisms/Header';
import { ListOfPhotoCards } from './components/organisms/ListOfPhotoCards';
import { TestForm } from './components/organisms/TestForm';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <TestForm /> */}
      <ListOfPhotoCards />
    </>
  );
};
