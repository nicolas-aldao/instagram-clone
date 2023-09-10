import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  background-color: var(--background-color);
  width: 200px;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  top: 40%;
  left: calc(50% - 100px);
  z-index: 1001;
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
`;

export const CloseButton = styled.button`
  color: gray;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin: 0;
`;
