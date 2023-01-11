import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({ onClick, text, disabled = false }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};
