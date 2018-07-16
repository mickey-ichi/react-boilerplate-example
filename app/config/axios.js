/* eslint-disable no-param-reassign */
import axios from 'axios';
import { Cookies } from 'services';

axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = Cookies.getCookie('token');
    if (token) {
      config.headers.common.Authorization = `Basic ${token}`;
    }
    return config;
  },
  error =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    if (response.data) {
      return response.data;
    }
    return response;
  },
  error =>
    // Do something with response error
    Promise.reject(error),
);

export default axios;
