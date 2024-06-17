import React from "react";
import { Button } from "./styles";

export const BasicButton = ({
  children,
  onClick = undefined,
  color,
  textColor,
}) => {
  return (
    <Button onClick={onClick} color={color} textColor={textColor}>
      {children}
    </Button>
  );
};
