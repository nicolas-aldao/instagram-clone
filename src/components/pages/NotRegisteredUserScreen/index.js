import React, { useState, useContext } from "react";
import { SpinnerAtom } from "../../atoms/Spinner";
import { SignInForm } from "../../organisms/SignInForm";
import { SignUpForm } from "../../organisms/SignUpForm";
import { BasicLayout } from "../../layouts/BasicLayout";
import { Context } from "../../../Context";
import { SpinnerContainer } from "./styles";

export default () => {
  const {
    state: { errorMessage, screenType },
    signIn,
    signUp,
    clearErrorMessages,
  } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const handleOnLoading = (propValue) => {
    setLoading(propValue);
  };

  return (
    <BasicLayout title="Welcome to Artgram!">
      {loading && (
        <SpinnerContainer isMobile={screenType?.isMobile}>
          <SpinnerAtom />
        </SpinnerContainer>
      )}
      <SignInForm onLoading={handleOnLoading} title="Sign in" />
      <SignUpForm onLoading={handleOnLoading} title="Sign up" />
    </BasicLayout>
  );
};
