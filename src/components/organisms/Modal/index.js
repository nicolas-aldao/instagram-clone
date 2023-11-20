import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../Context';
import { SubmitButton } from '../../atoms/SubmitButton';
import { Subtitle } from '../../atoms/Typography';
import {
  ModalContainer,
  ModalStyled,
  ModalHeader,
  CloseButton,
} from './styles';

export const Modal = () => {
  const { setNotRegisteredModal } = useContext(Context);

  const handleModalClick = e => {
    e.stopPropagation();
  };

  const showModalFunction = async val => {
    setNotRegisteredModal(val);
  };

  return (
    <>
      <ModalContainer onClick={() => showModalFunction(false)}>
        <ModalStyled onClick={e => handleModalClick(e)}>
          <ModalHeader>
            <CloseButton onClick={() => showModalFunction(false)}>
              X
            </CloseButton>
          </ModalHeader>
          <Subtitle>You must to be registered to like paintings</Subtitle>
          <Link to="/user">
            <SubmitButton
              text="Login or Sign up"
              style={{ cursor: 'pointer' }}
              onClick={() => showModalFunction(false)}
            />
          </Link>
        </ModalStyled>
      </ModalContainer>
    </>
  );
};
