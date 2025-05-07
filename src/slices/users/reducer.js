import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, getUser, getUsers, postUser, putUser } from "./thunk";

export const initialState = {
  users: [],
  getUser: {},
  error: {},
};

const UsersSlice = createSlice({
  name: "UsersSlice",
  initialState,
  reducer: {},
  reducers:{
    resetUserData(state) {
      state.getUser = {}; // Reset the getUser data
    },
  },
  extraReducers: (builder) => {
    // POST;
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.response = action.payload || null;
    });
    builder.addCase(postUser.rejected, (state, action) => {
      state.error = action.payload || null;
    });

    // put
    builder.addCase(putUser.rejected, (state, action) => {
      state.error = action.payload || null;
    });

    // DELETE
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.response = action.payload || null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.payload || null;
    });

    // GET - Record
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.getUser = action.payload;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.payload || null;
    });

    // GET - Records
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload || null;
    });
  },
});
export default UsersSlice.reducer;
