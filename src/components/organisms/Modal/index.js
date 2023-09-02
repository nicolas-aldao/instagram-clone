import React from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../../atoms/SubmitButton';
import { Subtitle } from '../../atoms/Typography';
import { ModalStyled } from './styles';

export const Modal = () => {
  return (
    <Link to="/user">
      <ModalStyled>
        <Subtitle>You must to be registered to like paintings</Subtitle>
        <SubmitButton text="Login or Sign up" style={{ cursor: 'pointer' }}/>
      </ModalStyled>
    </Link>
  );
};
