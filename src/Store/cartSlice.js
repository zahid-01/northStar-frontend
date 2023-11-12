import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.cartItems = state.cartItems.concat(actions.payload);
    },
    addItems(state, actions) {
      state.cartItems = [...state.cartItems, actions.payload];
    },

    setCount(state, actions) {
      state.cartCount = actions.payload;
    },
    removeItems(state, actions) {
      state.cartItems = state.cartItems.filter(
        (item) => item.item._id !== actions.payload
      );
      state.cartCount = state.cartItems.length;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;
