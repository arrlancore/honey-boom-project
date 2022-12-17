import authService, {
  ILoginPayload,
  ISignUpPayload,
} from "../../services/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import localStorageService from "../../services/localStorageService";

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

export const loginUser = createAsyncThunk(
  // action type string
  "user/login",
  // callback function
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await authService.login(payload);
      localStorageService.saveToken(data.response.message.loginToken);

      return data.response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
