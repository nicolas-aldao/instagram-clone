import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../Context";
import { BasicLayout } from "../../layouts/BasicLayout";
import { SubmitButton } from "../../atoms/SubmitButton";
import NotRegisteredUserScreen from "../NotRegisteredUserScreen";
import { Spacer } from "../../atoms/Spacer";
import { Container, Fullname } from "./styles";

export default () => {
  const { state, signOut } = useContext(Context);

  return state.isAuth ? (
    <BasicLayout title="My account" subtitle="Account Information">
      <Container>
        <Fullname>
          Fullname: {state.firstname ? state.firstname : state.email}
          {` ${state.lastname}`}
        </Fullname>
        <Spacer />
        <SubmitButton text="Logout" onClick={() => signOut()} />
      </Container>
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
};
