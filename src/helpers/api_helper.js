import axios from "axios";
import { api } from "../config";
import { STATUS_CODE } from "../constants/constants";

// default
axios.defaults.baseURL = api.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const token = JSON.parse(localStorage.getItem("authUser"))
  ? JSON.parse(localStorage.getItem("authUser")).token
  : null;

if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status || error.response.status) {
      case STATUS_CODE.internalServerError:
        message = "Internal Server Error";
        break;
      case STATUS_CODE.unauthorized:
        message = "Invalid credentials";
        if(localStorage.getItem("authUser")){
          localStorage.removeItem("authUser");
          window.location.reload();
        }
        message = "The session has expired! Please Login again";
        break;
      case STATUS_CODE.notFound:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.response || error.message || error;
    }
    return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url, params) => {
    let response;
    let paramKeys = [];
    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });
      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }
    return response;
  };

  /**
   * post given data to url
   */
  post = (
    url,
    data,
    headers = {
      headers: { "Content-Type": "application/json" },
    }
  ) => {
    return axios.post(url, data, headers);
  };

  /**
   * Updates data
   */

  update = (url, data) => {
    return axios.patch(url, data);
  };

  put = (url, data) => {
    return axios.put(url, data);
  };

  patch = (url, data) => {
    return axios.patch(url, data);
  };
  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedinUser = () => {
  const user = localStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

const initializeApiClient = () => {
  const token = JSON.parse(localStorage.getItem("authUser"))?.token;
  setAuthorization(token);
};

export { APIClient, setAuthorization, getLoggedinUser,initializeApiClient };
