import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pictures: [],
  pictureDetails: {},
};

export const pictureSlice = createSlice({
  name: "@pictures",
  initialState,
  reducers: {
    setPicture(state, action) {
      state.pictures = action.payload;
    },
  },
});

export const { setPicture } = pictureSlice.actions;

export const pictureReducer = pictureSlice.reducer;
