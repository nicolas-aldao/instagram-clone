import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const List = styled.ul`
  display: flex;
  align-items: center;
  overflow: scroll;
  width: 100%;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  left: 0;
  margin: 0 auto;
  max-width: 470px;
  border-radius: 10px;
  padding: 15px;
  position: fixed;
  z-index: 2;
  right: 0;
  overflow: scroll;
  ${fadeIn({ time: '0.5s' })};
`;

export const Item = styled.li`
  padding: 0 8px;
`;
