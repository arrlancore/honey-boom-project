import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "../userAction";

const initialState = {
  userToken: null,
  isLoggedIn: false,
  signUpSuccess: false,
  loading: false,
  error: null as unknown,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.signUpSuccess = true; // registration successful
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload; // registration successful
    });
  },
});

export default userSlice.reducer;
