import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../Context';
import { SubmitButton } from '../../atoms/SubmitButton';
import { Subtitle } from '../../atoms/Typography';
import { ModalStyled, ModalHeader, CloseButton } from './styles';

export const Modal = () => {
  const { setNotRegisteredModal } = useContext(Context);

  const showModalFunction = async () => {
    setNotRegisteredModal(false);
  };

  return (
    <>
      <ModalStyled>
        <ModalHeader>
          <CloseButton onClick={() => showModalFunction()}>X</CloseButton>
        </ModalHeader>
        <Subtitle>You must to be registered to like paintings</Subtitle>
        <Link to="/user">
          <SubmitButton
            text="Login or Sign up"
            style={{ cursor: 'pointer' }}
            onClick={() => showModalFunction()}
          />
        </Link>
      </ModalStyled>
    </>
  );
};
