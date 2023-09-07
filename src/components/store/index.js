import { createSlice, configureStore } from "@reduxjs/toolkit";
import showCartReducer from "./showCart";
import cartStateReducer from "./cart";

const store = configureStore({
  reducer: { showCart: showCartReducer, cartState: cartStateReducer },
});

export default store;
