import { createAsyncThunk } from "@reduxjs/toolkit";
import gpsService from "../../services/gpsService";

export const getGpsSummaries = createAsyncThunk(
  // action type string
  "gps/summary",
  // callback function
  async (token: string, { rejectWithValue }) => {
    try {
      const { data } = await gpsService.getGpsSummary(token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getGpsDetailByID = createAsyncThunk(
  // action type string
  "gps/detail",
  // callback function
  async (payload: { token: string; id: string }, { rejectWithValue }) => {
    try {
      const { data } = await gpsService.getGpsDetail(payload.token, payload.id);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
