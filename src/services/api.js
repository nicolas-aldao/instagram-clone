import axios from "axios";

// import { responseMiddleware } from "@/middlewares/response";
import { API_URL } from "../constants";

export class WebApiService {
  getPhotosAPI = async (id) => {
    let res;
    try {
      if (id) {
        res = await axios.get(`${API_URL}/photos/user/${id}`);
      } else {
        res = await axios.get(`${API_URL}/photos`);
      }
      return res?.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw new Error(
          "Error de configuración de Axios, revisar ip o archivo constants"
        );
      } else {
        throw new Error("Error!");
      }
    }
  };

  getPhotoByCategory = async (param) => {
    try {
      const res = await axios.get(
        `${API_URL}/photos/category?id=${param.categoryId}&userId=${param.userId}`
      );
      return res?.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw new Error(
          "Error de configuración de Axios, revisar ip o archivo constants"
        );
      } else {
        throw new Error("Error!");
      }
    }
  };
}
