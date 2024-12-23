import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data";

const { homeItems } = data;

const homeSlice = createSlice({
  name: "home",
  initialState: homeItems,
  reducers: {},
});

export const homeActions = homeSlice.actions;
export default homeSlice;
