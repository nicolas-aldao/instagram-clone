import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({ onClick, text, style = {}, disabled = false }) => {
  return (
    <Button disabled={disabled} onClick={onClick} style={style}>
      {text}
    </Button>
  );
};
