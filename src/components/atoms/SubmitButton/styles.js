import styled from 'styled-components';

export const Button = styled.button`
  background: var(--primary-color);
  border-radius: 3px;
  color: #fff;
  height: 32px;
  /* display: block; */
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
