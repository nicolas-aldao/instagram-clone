import React from 'react';
import { SpinnerAtom } from '../../atoms/Spinner';
import { Container } from './styles';

const LoadingScreen = () => {
  return (
    <Container>
      <SpinnerAtom />
    </Container>
  );
};

export default LoadingScreen;
