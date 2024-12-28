import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data"


const customersSlice = createSlice({
    name: "customers",
    initialState: data.customers,
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        removeCustomer: (state, action) => {
            return state.filter((customer) => customer.id !== action.payload);
        },
    },
});

export const customersActions = customersSlice.actions;
export default customersSlice;