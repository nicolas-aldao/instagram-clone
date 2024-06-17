import React from "react";
import { LoadingPhotocard } from "../LoadingPhotocard";
import { ModalError } from "../ModalError";
import { Photocard } from "../Photocard";
import { usePhotoCards } from "./usePhotoCards";

export const ListOfPhotocardsComponent = () => {
  const { photocards, isLoading, errorMessage } = usePhotoCards();

  const LoadingComponent = () => {
    return (
      <ul>
        {[...Array(5)].map((photo) => (
          <LoadingPhotocard />
        ))}
      </ul>
    );
  };

  return (
    <>
      {isLoading && <LoadingComponent />}

      {errorMessage && (
        <>
          <LoadingComponent />
          <ModalError errorMessage={errorMessage} />
        </>
      )}

      <ul>
        {photocards.length > 0 &&
          !isLoading &&
          photocards.map((photo) => (
            <Photocard
              key={photo._id}
              id={photo._id}
              liked={photo.liked}
              {...photo}
            />
          ))}
      </ul>
    </>
  );
};
