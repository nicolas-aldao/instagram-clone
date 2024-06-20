import { useContext, useState, useEffect } from "react";

import { Context } from "../../../Context";
import { useFetch } from "../../../hooks/useFetch";

export const usePhotoCards = () => {
  const {
    state: { userId, categorySelected },
  } = useContext(Context);

  const [fetchOptions, setFetchOptions] = useState({
    serviceMethod: undefined,
    param: undefined,
    initialData: undefined,
  });

  const { data: photocards, isLoading, errorMessage } = useFetch(fetchOptions);

  useEffect(() => {
    userId &&
      setFetchOptions({
        serviceMethod: "getPhotosAPI",
        param: userId,
        initialData: undefined,
      });
  }, [userId]);

  useEffect(() => {
    categorySelected &&
      setFetchOptions({
        serviceMethod: "getPhotoByCategory",
        param: { categoryId: categorySelected, userId },
        initialData: undefined,
      });
  }, [categorySelected]);

  return { photocards, isLoading, errorMessage };
};
