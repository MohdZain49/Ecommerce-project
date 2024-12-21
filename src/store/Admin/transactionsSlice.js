import { createSlice } from "@reduxjs/toolkit";
import TRANSACTION_DEFAULT_DATA from "../../assets/data/transactionsData";

const transactions = TRANSACTION_DEFAULT_DATA[0];

const transactionsSlice = createSlice({
  name: "home",
  initialState: transactions,
  reducers: {},
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;
