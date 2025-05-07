import "react-toastify/dist/ReactToastify.css";

//Include Both Helper File with needed methods
import * as api from "../../helpers/backend_helper";
import { createThunkAction } from "../ThunkAction";

export const postregisterUser = createThunkAction({
  type: "register/registerUser",
  apiCall: api.postregisterUser,
  successMessage: "register Added Successfully",
  errorMessage: "register Addition Failed",
});
