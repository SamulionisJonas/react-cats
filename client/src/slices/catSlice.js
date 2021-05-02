import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatBreeds = createAsyncThunk("cats/fetch", async () => {
  const resp = await axios.get("https://api.thecatapi.com/v1/breeds");
  return resp.data;
});

const catSlice = createSlice({
  name: "cats",
  initialState: {
    loading: "idle",
    filtered: [],
    data: [],
  },
  reducers: {
    search(state, { payload }) {
      state.filtered = state.data.filter((item) =>
        item[payload.sortBy].toLowerCase().includes(payload.value),
      );
    },
    sortBy(state, { payload }) {
      state.filtered = state.filtered.sort(
        (a, b) => b[payload.type] - a[payload.type],
      );
    },
  },
  extraReducers: {
    [fetchCatBreeds.pending]: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [fetchCatBreeds.rejected]: (state) => {
      state.loading = "idle";
    },
    [fetchCatBreeds.fulfilled]: (state, { payload }) => {
      state.filtered = payload;
      state.data = payload;
      state.loading = "idle";
    },
  },
});

export const { search, sortBy } = catSlice.actions;
export default catSlice.reducer;
