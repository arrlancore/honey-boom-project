import { createSlice } from "@reduxjs/toolkit";
import { IGPSSummary } from "../../types";
import { getGpsDetailByID, getGpsSummaries } from "./gpsAction";

const initialState = {
  loading: false,
  error: null as unknown,
  errorCode: -1,
  gpsSummaries: [] as IGPSSummary[],
  gpsDetailByID: [] as IGPSSummary[],
};

const gpsSlice = createSlice({
  name: "gps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGpsSummaries.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorCode = -1;
    });
    builder.addCase(getGpsSummaries.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gpsSummaries = payload;
    });
    builder.addCase(getGpsSummaries.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = (payload as any).message;
      state.errorCode = (payload as any).code;
    });

    builder.addCase(getGpsDetailByID.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorCode = -1;
    });
    builder.addCase(getGpsDetailByID.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gpsDetailByID = payload;
    });
    builder.addCase(getGpsDetailByID.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = (payload as any).message;
      state.errorCode = (payload as any).code;
    });
  },
});

export default gpsSlice.reducer;
