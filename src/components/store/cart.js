import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartContents: { name: "", price: 0, amount: 0 },
  items: {
    name: "Test Item",
    price: 6,
    description: "This is a first product - amazing!",
  },
};

const cartSlice = createSlice({
  name: "cartContents",
  initialState: initialState,
  reducers: {
    addToCart(state) {
      if (state.cartContents.amount === 0) {
        state.cartContents = {
          name: state.items.name,
          price: state.items.price,
          amount: 1,
        };
        return;
      }
      if (state.cartContents.amount > 0) {
        state.cartContents = {
          name: state.items.name,
          price: state.items.price,
          amount: +state.cartContents.amount + 1,
        };
      }
    },
    removeFromCart(state) {
      if (state.cartContents.amount === 0) {
        return;
      }
      if (state.cartContents.amount > 0) {
        state.cartContents = {
          name: state.items.name,
          price: state.items.price,
          amount: state.cartContents.amount - 1,
        };
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
