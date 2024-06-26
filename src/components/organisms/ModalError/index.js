import React from "react";
import { Subtitle } from "../../atoms/Typography";
import {
  ModalContainer,
  ModalStyled,
  ModalHeader,
  ModalContent,
  TextContainer,
  CloseButton,
} from "./styles";

export const ModalError = ({ errorMessage }) => {
  return (
    <ModalContainer>
      <ModalStyled>
        <ModalContent>
          <TextContainer>
            <Subtitle>{errorMessage}</Subtitle>
          </TextContainer>
        </ModalContent>
      </ModalStyled>
    </ModalContainer>
  );
};
