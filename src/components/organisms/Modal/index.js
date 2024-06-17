import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context";
import { Subtitle } from "../../atoms/Typography";
import {
  ModalContainer,
  ModalStyled,
  ModalHeader,
  CloseButton,
} from "./styles";
import { PrimaryButton } from "../../atoms/PrimaryButton";

export const Modal = () => {
  const { setNotRegisteredModal } = useContext(Context);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const showModalFunction = async (val) => {
    setNotRegisteredModal(val);
  };

  return (
    <>
      <ModalContainer onClick={() => showModalFunction(false)}>
        <ModalStyled onClick={(e) => handleModalClick(e)}>
          <ModalHeader></ModalHeader>
          <Subtitle>You must to be registered to like paintings</Subtitle>
          <Link to="/user">
            <PrimaryButton onClick={() => showModalFunction(false)}>
              Login or Sign up
            </PrimaryButton>
          </Link>
          <CloseButton onClick={() => showModalFunction(false)}>
            Close
          </CloseButton>
        </ModalStyled>
      </ModalContainer>
    </>
  );
};
