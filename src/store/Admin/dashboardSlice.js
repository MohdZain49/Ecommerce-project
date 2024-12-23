import { createSlice } from "@reduxjs/toolkit";
import dashboardData from "../../assets/data/dashboardData";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardData,
  reducers: {},
});

export const dashboardAction = dashboardSlice.actions;

export default dashboardSlice;
