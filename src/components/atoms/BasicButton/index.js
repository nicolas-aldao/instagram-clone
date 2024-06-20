import React from "react";
import { Button } from "./styles";

export const BasicButton = ({
  children,
  onClick = undefined,
  color,
  textColor,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick}
      color={color}
      textColor={textColor}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
