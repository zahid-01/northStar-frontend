import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./loginSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { login: loginSlice.reducer, cart: cartSlice.reducer },
});

export default store;
