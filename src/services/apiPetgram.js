import axios from "axios";

const baseUrl = "https://json-server-ruby.vercel.app";

// export const getFavsAPI = async () => {
//   try {
//     const res = await axios.get(baseUrl + "/favs");
//     return res;
//   } catch (err) {
//   }
// };

export const getFavsAPI = async (id) => {
  try {
    const res = await axios.get(baseUrl + "/photos/favorites/" + id);
    return res;
  } catch (err) {
  }
};

export const getPhotosAPI = async (id) => {
  let res;
  try {
    if (id) {
      res = await axios.get(baseUrl + "/photos/user/" + id);
    } else {
      res = await axios.get(baseUrl + "/photos");
    }
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

export const addLikeAPI = async (userId, photoId) => {
  try {
    const res = await axios.post(baseUrl + "/photouser", {
      userId,
      photoId
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addDislikeAPI = async (userId, photoId) => {
  try {
    const res = await axios.delete(baseUrl + "/photouser", {
      params: {
        userId: userId,
        photoId: photoId
      }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getPhotoUserByUser = async (userId) => {
  try {
    const res = await axios.get(baseUrl + "/photouser/user/" + userId);
    return res;
  } catch (err) {
    console.log("getPhotoAPI " + err);
  }
};

export const getPhotoUserByPhoto = async (photoId) => {
  try {
    const res = await axios.get(baseUrl + "/photouser/photo/" + photoId);
    return res;
  } catch (err) {
    console.log("getPhotoAPI " + err);
  }
};
