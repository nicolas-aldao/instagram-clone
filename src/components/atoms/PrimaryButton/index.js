import React from "react";
import { BasicButton } from "../BasicButton";

export const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <BasicButton
      color="--primary-color"
      textColor="--text-color-white"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </BasicButton>
  );
};
