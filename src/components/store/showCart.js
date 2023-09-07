import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const showCartSlice = createSlice({
  name: "showCart",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const showCartActions = showCartSlice.actions;
export default showCartSlice.reducer;
 