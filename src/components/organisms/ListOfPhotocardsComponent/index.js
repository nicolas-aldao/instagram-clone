import React, { useEffect } from "react";
import { LoadingPhotocard } from "../LoadingPhotocard";
import { ModalError } from "../ModalError";
import { Photocard } from "../Photocard";
import { usePhotoCards } from "./usePhotoCards";

export const ListOfPhotocardsComponent = (
  {
    // data = [],
    // isLoading = false,
    // errorMessage = undefined,
  }
) => {
  const loadingCards = [1, 2, 3, 4, 5];
  // console.log("error message", errorMessage);
  // const [errorMessageState, setErrorMessageState] = useState(errorMessage);

  // useEffect(() => {
  //   setErrorMessageState(errorMessage);
  // }, [errorMessage]);

  // useEffect(() => {
  //   console.log("errorMessageState ", errorMessageState);
  // }, [errorMessageState]);

  const { photocards, isLoading, errorMessage } = usePhotoCards();

  useEffect(() => {
    console.log("error message en componente superior ", errorMessage);
  }, [errorMessage]);
  useEffect(() => {
    console.log("isLoading en componente superior ", isLoading);
  }, [isLoading]);

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
