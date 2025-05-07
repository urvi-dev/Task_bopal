import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createThunkAction = ({ type = '', apiCall, successMessage, errorMessage }) =>
  createAsyncThunk(type, async (payload, { rejectWithValue }) => {
    try {
      const response = await apiCall(payload);
      toast.success(successMessage);
      return response;
    } catch (error) {
      const { message } = error.data
      toast.error(message || errorMessage);
      return rejectWithValue({ ...error.data, status: error.status } || error.message);
    }
  });
