import React, { useContext, useEffect } from "react";
import { Context } from "../../../Context";
import { BasicLayout } from "../../layouts/BasicLayout";
import { Modal } from "../../organisms/Modal";
import { ListOfPhotocardsComponent } from "../../organisms/ListOfPhotocardsComponent";

export const HomeScreen = () => {
  const email = "demo";
  const password = "demo";

  const {
    state: { showNotRegisteredModal },
    signIn,
  } = useContext(Context);

  const autoLogin = async () => {
    await signIn({ email, password }, () => {
      console.log("logged");
    });
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <BasicLayout showCategories marginTop="110px">
      {showNotRegisteredModal ? <Modal /> : null}
      <ListOfPhotocardsComponent />
    </BasicLayout>
  );
};
