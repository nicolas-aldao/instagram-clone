import React from 'react';
import Logo from '../../molecules/Logo';
import { ListOfCategories } from '../ListOfCategories';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ListOfCategories />
    </Container>
  );
};

export default Header;
