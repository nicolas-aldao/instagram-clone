import React, { useContext } from "react";
import { Context } from "../../../Context";
import { BasicLayout } from "../../layouts/BasicLayout";
import { Modal } from "../../organisms/Modal";
import { ListOfPhotocardsComponent } from "../../organisms/ListOfPhotocardsComponent";

export const HomeScreen = () => {
  const {
    state: { showNotRegisteredModal },
  } = useContext(Context);

  return (
    <BasicLayout showCategories marginTop="110px">
      {showNotRegisteredModal ? <Modal /> : null}
      <ListOfPhotocardsComponent />
    </BasicLayout>
  );
};
