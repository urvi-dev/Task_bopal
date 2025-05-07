//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { postFakeLogin, postJwtLogin } from "../../../helpers/backend_helper";
import {
  loginSuccess,
  logoutUserSuccess,
  apiError,
  reset_login_flag,
} from "./reducer";
import { createThunkAction } from "@/slices/ThunkAction";
import * as api from "@/helpers/backend_helper";
import { toast } from "react-toastify";
import { initializeApiClient } from "@/helpers/api_helper";

export const loginUser = (user, history) => async (dispatch) => {
  try {
    const response = postJwtLogin({
      email: user.email,
      password: user.password,
    });
    var data = await response;
    if (data) {
      localStorage.setItem("authUser", JSON.stringify(data));
      initializeApiClient();
      dispatch(loginSuccess(data));
      history("/dashboard");
      toast.success("Login Successful");
    }
  } catch (error) {
    console.log("error: ", error);
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("authUser");
    let fireBaseBackend = getFirebaseBackend();
    if (import.meta.env.VITE_REACT_APP_DEFAULT_AUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialLogin = (type, history) => async (dispatch) => {
  try {
    let response;

    if (import.meta.env.VITE_REACT_APP_DEFAULT_AUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(type);
    }
    //  else {
    //   response = postSocialLogin(data);
    // }

    const socialdata = await response;
    if (socialdata) {
      localStorage.setItem("authUser", JSON.stringify(response));
      dispatch(loginSuccess(response));
      history("/dashboard");
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = await dispatch(reset_login_flag());

    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};

// export const verificationEmail = (payload) => async (dispatch) => {
//   try {
//     const response = await dispatch(verifyEmail(payload));

//     return response;
//   } catch (error) {
//     dispatch(apiError(error));
//   }
// };

export const checkVerificationEmail = createThunkAction({
  apiCall: api.checkEmailVerification,
  successMessage: null,
  errorMessage: "Failed to check verification",
});

export const verifyEmail = createThunkAction({
  apiCall: api.verifyEmail,
  successMessage: "Email Verified Successfully",
  errorMessage: "Failed to verify",
});

export const createPassword = createThunkAction({
  apiCall: api.resetPassword,
  successMessage: "Password Set Successfully",
  errorMessage: "Failed to set password",
});

export const forgotPassword = createThunkAction({
  apiCall: api.passwordForget,
  successMessage: "Password Reset Successfully",
  errorMessage: "Failed to reset password",
});
