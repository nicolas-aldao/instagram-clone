import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../molecules/Logo';
import { ListOfCategories } from '../ListOfCategories';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      {/* <Link to="/">
        <Logo />
      </Link> */}
      {/* <ListOfCategories /> */}
    </Container>
  );
};
