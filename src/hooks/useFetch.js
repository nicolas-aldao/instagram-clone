import { useState, useEffect } from "react";

import { WebApiService } from "../services/api";

const apiService = new WebApiService();

export const useFetch = ({
  serviceMethod,
  method = "GET",
  param,
  body,
  initialData = [],
}) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(method === "GET");
  const [errorMessage, setErrorMessage] = useState();

  const fetchData = async () => {
    try {
      if (serviceMethod) {
        let response;
        if (method === "POST") {
          if (body) {
            setIsLoading(true);
            response = await apiService[serviceMethod](body);
          }
        } else {
          response = await apiService[serviceMethod](param);
        }
        setData(response);
      }
    } catch (error) {
      const axiosError = error;
      if (axiosError.response) {
        setErrorMessage(
          `Error ${axiosError.response.status}: ${axiosError.response.data}`
        );
      } else if (axiosError.request) {
        setErrorMessage("No se pudo realizar la solicitud");
      } else {
        setErrorMessage("Ha ocurrido un error, intente más tarde");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    serviceMethod && fetchData();
  }, [serviceMethod, body, param]);

  return { data, isLoading, errorMessage };
};
