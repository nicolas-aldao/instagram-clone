import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  background-color: var(--background-color);
  width: 200px;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  top: 40%;
  left: calc(50% - 100px);;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;
