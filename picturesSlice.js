import { createSlice } from "@reduxjs/toolkit";
import { getOnePicture, handleSearch } from "./picturesActions";

const initialState = {
  pictures: [],
  pictureDetails: {},
  search: "",
};

export const pictureSlice = createSlice({
  name: "@pictures",
  initialState,
  reducers: {
    setPicture(state, action) {
      state.pictures = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOnePicture.fulfilled, (state, action) => {
        state.pictureDetails = action.payload;
      })
      .addCase(handleSearch.fulfilled, (state, action) => {
        state.pictures = action.payload;
      });
  },
});

export const { setPicture } = pictureSlice.actions;

export const { setSearch } = pictureSlice.actions;

export const pictureReducer = pictureSlice.reducer;
