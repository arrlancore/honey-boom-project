import { createSlice } from "@reduxjs/toolkit";
import { IGPSSummary } from "../../types";
import { getGpsDetailByID, getGpsSummaries } from "./gpsAction";

const initialState = {
  loading: false,
  error: null as unknown,
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
    });
    builder.addCase(getGpsSummaries.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gpsSummaries = payload;
    });
    builder.addCase(getGpsSummaries.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getGpsDetailByID.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getGpsDetailByID.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gpsDetailByID = payload;
    });
    builder.addCase(getGpsDetailByID.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default gpsSlice.reducer;
