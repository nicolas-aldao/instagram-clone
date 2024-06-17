import React, { useState, useContext } from "react";
import { useInputValue } from "../../../hooks/useInputValue";
import { Badge } from "../../atoms/Badge";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { Context } from "../../../Context";
import { FormContainer, Form, Input, Title } from "./styles";

export const SignInForm = ({ title, disabled, onLoading }) => {
  const email = useInputValue("demo");
  const password = useInputValue("demo");
  const [frontError, setFrontError] = useState("");
  const {
    state: { error },
    signIn,
  } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  const onSubmit = async ({ email, password }) => {
    onLoading(true);
    try {
      await signIn({ email, password }, () => {
        console.log("logged");
      });
    } catch (e) {
      console.log("e ", e);
      setFrontError("Something went wrong! Please, try later...");
    }
    onLoading(false);
  };

  return (
    <FormContainer>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="Email" {...email} disabled={disabled} />
        <Input
          placeholder="Password"
          type="password"
          {...password}
          disabled={disabled}
        />
        <PrimaryButton disabled={disabled}>{title}</PrimaryButton>
        {error?.type === "login" && (
          <Badge
            content={error?.msg}
            fontColor="#d71919"
            backgroundColor="#FFCCBC"
          />
        )}
        {frontError !== "" && (
          <Badge
            content={frontError}
            fontColor="#d71919"
            backgroundColor="#FFCCBC"
          />
        )}
      </Form>
    </FormContainer>
  );
};
