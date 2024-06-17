import { useContext, useState, useEffect } from "react";
import { GENERIC_MESSAGE_ERROR } from "../../../constants";
import { getPhotoByCategory, getPhotosAPI } from "../../../services/apiPetgram";
import { Context } from "../../../Context";

export const usePhotoCards = () => {
  const [photocards, setPhotocards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const {
    state: { userId, categorySelected },
  } = useContext(Context);
  let res;

  // TODO: NEEDS REFACTOR
  async function fetchMyAPI() {
    setIsLoading(true);
    if (categorySelected !== null && categorySelected !== undefined) {
      res = await getPhotoByCategory(categorySelected, userId);
    } else {
      res = await getPhotosAPI(userId);
    }
    if (!res) {
      setErrorMessage(GENERIC_MESSAGE_ERROR);
    } else {
      setPhotocards(res.data);
    }
    setIsLoading(false);
  }

  // TODO: NEEDS REFACTOR
  useEffect(() => {
    console.log("🚀 ~ usePhotoCards ~ categorySelected:", categorySelected);
    try {
      fetchMyAPI();
    } catch (err) {
      setErrorMessage(GENERIC_MESSAGE_ERROR);
    }
  }, [categorySelected, userId]);

  return { photocards, isLoading, errorMessage };
};
