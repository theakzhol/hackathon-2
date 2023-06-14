import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPicture } from "./picturesSlice";
import { API } from "../../helpers/consts";

export const getPictures = createAsyncThunk(
  "@pictures/getPictures",
  async (_, { dispatch }) => {
    const { data } = await axios(API);
    dispatch(setPicture(data));
  }
);

export const addPicture = createAsyncThunk(
  "@pictures/addPicture",
  async (picturesObj, { dispatch }) => {
    await axios.post(API, picturesObj);
    dispatch(getPictures());
  }
);
