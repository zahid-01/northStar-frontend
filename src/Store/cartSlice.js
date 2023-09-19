import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.cartItems = actions.payload;
    },
    // removeItems(state, actions){

    // }
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;
