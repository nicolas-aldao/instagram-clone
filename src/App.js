import React from "react";
import { Category } from "./components/atoms/Category";
import { TestForm } from "./components/organisms/TestForm";

export const App = () => {
  return (
    <>
      <Category />
      <p>components</p>
      <TestForm/>
    </>
  );
};
