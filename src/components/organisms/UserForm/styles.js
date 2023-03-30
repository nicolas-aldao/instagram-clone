import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 16px;
  padding: 8px 4px;
  display: flex;
  align-self: center;
  width: calc(100% - 16px);
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  width: 250px;
  align-self: center;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`;
export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
