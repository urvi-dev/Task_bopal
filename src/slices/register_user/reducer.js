import { createSlice } from "@reduxjs/toolkit";
import { postregisterUser } from "./thunk";

export const initialState = {
  registerUsers: [],
  getRegisterUsers: {},
  error: {},
};

const RegisterUserSlice = createSlice({
  name: "RegisterUserSlice",
  initialState,
  reducer: {},
  reducers: {
    resetUserData(state) {
      state.getRegisterUsers = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postregisterUser.fulfilled, (state, action) => {
      state.response = action.payload || null;
    });
    builder.addCase(postregisterUser.rejected, (state, action) => {
      state.error = action.payload || null;
    });
  },
});
export default RegisterUserSlice.reducer;
