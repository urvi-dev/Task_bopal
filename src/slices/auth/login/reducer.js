import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const initialState = {
  user: {},
  error: "", // for error message
  loading: false,
  isUserLogout: false,
  errorMsg: false, // for error
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    apiError(_, action) {
      const {data : {message}} = action.payload;
      toast.error(message)
    },
    loginSuccess(_, action) {
     const {data : {message}} = action.payload;
     toast.success(message)
    },
    checkEmailVerification(_,action){
      console.log("action",action)
    },
    logoutUserSuccess(state, action) {
      state.isUserLogout = true
    },
    reset_login_flag(state) {
      state.error = null
      state.loading = false;
      state.errorMsg = false;
    }
  },
});

export const {
  apiError,
  loginSuccess,
  logoutUserSuccess,
  reset_login_flag,
  checkEmailVerification
} = loginSlice.actions

export default loginSlice.reducer;