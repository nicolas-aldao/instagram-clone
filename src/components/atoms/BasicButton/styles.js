import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.color && `var(${props.color})`};
  color: ${(props) => props.textColor && `var(${props.textColor})`};
  border-radius: var(--border-radius-lg);
  color: var(--text-color-white);
  font-size: 16px;
  height: 32px;
  min-width: 80px;
  padding: 0 18px;
  align-self: center;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
  cursor: pointer;
`;
