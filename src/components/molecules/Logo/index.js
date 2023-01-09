import React from 'react';
import LogoSVG from '../../atoms/LogoSVG';
import { Text, Container } from './styles';

const Logo = () => {
  return (
    <Container>
        <LogoSVG />
        <Text>Alexandría</Text>
    </Container>
  );
};

export default Logo;
