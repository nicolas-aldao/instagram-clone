import axios from "axios";

const baseUrl = "https://json-server-ruby.vercel.app";

export const getFavsAPI = async () => {
  try {
    const res = await axios.get(baseUrl + "/favs");
    return res;
  } catch (err) {
  }
};

export const getPhotosAPI = async () => {
  try {
    const res = await axios.get(baseUrl + "/photos");
    return res;
  } catch (err) {
    console.log("getPhotosAPI " + err);
  }
};

export const getPhotoAPI = async (id) => {
  try {
    const res = await axios.get(baseUrl + "/photos/" + id);
    return res;
  } catch (err) {
    console.log("getPhotoAPI " + err);
  }
};

