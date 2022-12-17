import authService, { ISignUpPayload } from "../services/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";

// userAction.js
export const signUpUser = createAsyncThunk(
  // action type string
  "user/sign-up",
  // callback function
  async (payload: ISignUpPayload, { rejectWithValue }) => {
    try {
      await authService.signUp(payload);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
