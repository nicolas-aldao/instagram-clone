import styled from "styled-components";

export const Button = styled.button`
  background: var(--primary-color);
  border-radius: 3px;
  color: #fff;
  height: 32px;
  min-width: 100px;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
