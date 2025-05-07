import "react-toastify/dist/ReactToastify.css";

//Include Both Helper File with needed methods
import * as api from "../../helpers/backend_helper";
import { createThunkAction } from "../ThunkAction";

export const postUser = createThunkAction({
  type: "users/postUser",
  apiCall: api.postUser,
  successMessage: "User Added Successfully",
  errorMessage: "User Addition Failed",
});

export const putUser = createThunkAction({
  type: "users/putUser",
  apiCall: ({ id, ...rest }) => api.putUser(rest, id),
  successMessage: "User Updated Successfully",
  errorMessage: "User Update Failed",
});

export const deleteUser = createThunkAction({
  type: "users/deleteUser",
  apiCall: api.deleteUser,
  successMessage: "User Deleted Successfully",
  errorMessage: "User Deletion Failed",
});

export const getUser = createThunkAction({
  type: "users/getUser",
  apiCall: ({ id }) => api.getUser(id),
  successMessage: null,
  errorMessage: "Failed to Fetch User",
});

export const getUsers = createThunkAction({
  type: "users/getUsers",
  apiCall: api.getUsers,
  successMessage: null,
  errorMessage: "Failed to Fetch Users",
});
