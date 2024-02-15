import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.3
  ); /* Adjust the last value (alpha) for transparency */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalStyled = styled.div`
  position: fixed;
  background-color: var(--background-color);
  width: 200px;
  height: 200px;
  padding: 10px 20px;
  border-radius: 20px;
  top: 40%;
  left: calc(50% - 100px);
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: -6px 0px 187px -13px rgba(0, 0, 0, 0.85);
  -webkit-box-shadow: -6px 0px 187px -13px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: -6px 0px 187px -13px rgba(0, 0, 0, 0.85);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  text-align: right;
  z-index: 5;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

export const TextContainer = styled.div`
  display: flex;
  height: fit-content;
  align-self: center;
`;

export const CloseButton = styled.button`
  color: gray;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin: 0;
`;
