import axios from 'axios';
import { API_URL } from '../constants';

export const getBlogPostsAPI = async () => {
  try {
    const res = await axios.get(`${API_URL}/posts`);
    return res;
  } catch (err) {
    console.log('getBlogPostsAPI ' + err);
  }
};

export const addBlogPostAPI = async (title, content) => {
  try {
    const res = await axios.post(`${API_URL}/posts`, {
      id: 5,
      title,
      content,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const modifyBlogPostAPI = async (id, title, content) => {
  try {
    const res = await axios.put(`${API_URL}/posts/${id}`, {
      title,
      content,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlogPostAPI = async id => {
  try {
    const res = await axios.delete(`${baseUrl}/posts/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
