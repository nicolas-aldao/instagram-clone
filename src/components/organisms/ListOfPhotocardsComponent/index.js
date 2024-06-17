import React from "react";
import { LoadingPhotocard } from "../LoadingPhotocard";
import { ModalError } from "../ModalError";
import { Photocard } from "../Photocard";
import { usePhotoCards } from "./usePhotoCards";

export const ListOfPhotocardsComponent = () => {
  const loadingCards = [1, 2, 3, 4, 5];
  const { photocards, isLoading, errorMessage } = usePhotoCards();

  // temporal
  if (isLoading) {
    return (
      <ul>
        {loadingCards.map((photo) => (
          <LoadingPhotocard />
        ))}
      </ul>
    );
  }

  if (errorMessage) {
    return (
      <>
        <ul>
          {loadingCards.map((photo) => (
            <LoadingPhotocard />
          ))}
        </ul>
        <ModalError errorMessage={errorMessage} />
      </>
    );
  }

  return (
    <ul>
      {photocards.map((photo) => (
        <Photocard
          key={photo._id}
          id={photo._id}
          liked={photo.liked}
          {...photo}
        />
      ))}
    </ul>
  );
};
