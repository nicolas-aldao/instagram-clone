import React from "react";
import { BasicButton } from "../BasicButton";

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <BasicButton
      color="--primary-color"
      textColor="--text-color-white"
      onClick={onClick}
    >
      {children}
    </BasicButton>
  );
};
