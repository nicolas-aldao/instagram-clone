import React, { useState, useContext } from "react";
import { useInputValue } from "../../../hooks/useInputValue";
import { Badge } from "../../atoms/Badge";
import { Context } from "../../../Context";
import { FormContainer, Form, Input, Title, Error } from "../SignInForm/styles";
import { PrimaryButton } from "./../../atoms/PrimaryButton";

export const SignUpForm = ({ title, disabled, onLoading }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  const firstname = useInputValue("");
  const lastname = useInputValue("");
  const [frontError, setFrontError] = useState("");
  const {
    state: { error },
    signUp,
    clearErrorMessages,
  } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password, firstname, lastname }) => {
    onLoading(true);
    try {
      await signUp({ email, password, firstname, lastname }, () => {
        console.log("signup");
      });
    } catch (e) {
      console.log("e ", e);
      setFrontError("Something went wrong! Please, try later...");
    }
    onLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.value === "" || password.value === "") {
      setFrontError("User and password fields are required");
      return;
    }
    setFrontError("");
    onSubmit({
      email: email.value,
      password: password.value,
      firstname: firstname.value,
      lastname: lastname.value,
    });
  };

  return (
    <FormContainer>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="User" {...email} disabled={disabled} />
        <Input
          placeholder="Password"
          type="password"
          {...password}
          disabled={disabled}
        />
        <Input
          placeholder="Firstname"
          type="firstname"
          {...firstname}
          disabled={disabled}
        />
        <Input
          placeholder="Lastname"
          type="lastname"
          {...lastname}
          disabled={disabled}
        />
        <PrimaryButton disabled={disabled}>{title}</PrimaryButton>
        {error?.type === "signup" && (
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
