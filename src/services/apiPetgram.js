import axios from 'axios';
import { API_URL } from '../constants';

//const baseUrl = "http://localhost:3000";

export const getFavsAPI = async id => {
  try {
    const res = await axios.get(`${API_URL}/photos/favs/${id}`);
    return res;
  } catch (err) {}
};

export const getPhotosAPI = async id => {
  let res;
  try {
    if (id) {
      res = await axios.get(`${API_URL}/photos/user/${id}`);
    } else {
      res = await axios.get(`${API_URL}/photos`);
    }
    return res;
  } catch (err) {
    console.log('getPhotosAPI ' + err);
  }
};

export const getPhotoAPI = async (photoId, userId) => {
  try {
    const res = await axios.get(`${API_URL}/photos/${photoId}/${userId}`);
    return res;
  } catch (err) {
    console.log('getPhotoAPI ' + err);
  }
};

export const addLikeAPI = async (userId, photoId) => {
  try {
    const res = await axios.post(`${API_URL}/photouser`, {
      userId,
      photoId,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addDislikeAPI = async (userId, photoId) => {
  try {
    const res = await axios.delete(`${API_URL}/photouser`, {
      params: {
        userId: userId,
        photoId: photoId,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getPhotoByCategory = async categoryId => {
  try {
    const res = await axios.get(`${API_URL}/photos/category/${categoryId}`);
    return res;
  } catch (err) {
    console.log('getPhotoAPI ' + err);
  }
};

export const getPhotoUserByUser = async userId => {
  try {
    const res = await axios.get(`${API_URL}/photouser/user/${userId}`);
    return res;
  } catch (err) {
    console.log('getPhotoAPI ' + err);
  }
};

export const getPhotoUserByPhoto = async photoId => {
  try {
    const res = await axios.get(`${API_URL}/photouser/photo/${photoId}`);
    return res;
  } catch (err) {
    console.log('getPhotoAPI ' + err);
  }
};

export const getUserFavoriteCategory = async userId => {
  try {
    const res = await axios.get(`${API_URL}/photos/favs/genre/${userId}`);
    return res;
  } catch (err) {
    console.log('getUserFavoriteCategory ' + err);
  }
};
