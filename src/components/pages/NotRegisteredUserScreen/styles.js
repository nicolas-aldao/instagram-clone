import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  position: fixed;
  /* top: 0;
  left: 0; */
  width: ${props => props.isMobile ? '100vw' : '500px'};
  height: 100%;
  background-color: white;
  opacity: 0.8;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
