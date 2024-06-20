import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../Context";
import { BasicLayout } from "../../layouts/BasicLayout";
import NotRegisteredUserScreen from "../NotRegisteredUserScreen";
import { Spacer } from "../../atoms/Spacer";
import { Container, Fullname } from "./styles";
import { PrimaryButton } from "../../atoms/PrimaryButton";

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
        <PrimaryButton disabled={true} onClick={() => signOut()}>
          Logout
        </PrimaryButton>
      </Container>
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
};
