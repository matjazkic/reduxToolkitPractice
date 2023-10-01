import { createSlice, current } from "@reduxjs/toolkit";
import { showCartActions } from "./showCart";

const initialState = {
  changed: false,
  cartContents: [],
  items: [
    {
      id: 0,
      name: "Test Item",
      price: 6,
      description: "This is a first product - amazing!",
      amount: 0,
    },
    {
      id: 1,
      name: "Test Item 2",
      price: 4,
      description: "This is a second product - amazing!",
      amount: 0,
    },
  ],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartContents",
  initialState: initialState,
  reducers: {
    clearCart(state) {
      state.cartContents = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.totalPrice = action.payload.totalPrice;

      state.cartContents = action.payload.cartContents;
    },
    addToCart(state, action) {
      console.log(action.payload);

      const itemInCart = state.cartContents.find(
        (item) => item.id === action.payload
      );

      console.log(current(state.cartContents));
      if (itemInCart) {
        state.changed = true;
        itemInCart.amount = itemInCart.amount + 1;
        state.totalAmount = state.totalAmount + 1;
        state.totalPrice = state.totalPrice + itemInCart.price;
      } else {
        /*  let updatedItem = itemInCart;
        console.log(current(itemInCart));

        updatedItem = { ...itemInCart, amount: itemInCart.amount + 1 };
        /*  
        let updatedItem = state.cartContents[action.payload];

        updatedItem = {
          ...state.cartContents[action.payload],
          amount: +state.cartContents[action.payload].amount + 1,
        }; */
        /*     let updatedItems = [...state.cartContents];
           const itemToOverwrite = state.cartContents.find(
             (item) => item.id === action.payload
           );

        updatedItems[itemToOverwrite.id] = updatedItem;
        finalArray = updatedItems;
        state.cartContents = finalArray;  */
        let newItem = { ...state.items[action.payload], amount: 1 };
        state.cartContents.push(newItem);
        state.totalAmount = state.totalAmount + 1;
        state.totalPrice = state.totalPrice + state.items[action.payload].price;
      }
    },

    /*  addToCart(state) {
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
    } */ removeFromCart(state, action) {
      const itemInCart = state.cartContents.find(
        (item) => item.id === action.payload
      );
      // filter array
      if (itemInCart.amount > 1) {
        itemInCart.amount = itemInCart.amount - 1;
        state.totalAmount = state.totalAmount - 1;
        state.totalPrice = state.totalPrice - state.items[action.payload].price;
        state.changed = true;
      } else {
        const newArray = state.cartContents.filter(
          (item) => item.id !== action.payload
        );
        state.totalAmount = state.totalAmount - 1;
        state.totalPrice = state.totalPrice - state.items[action.payload].price;
        state.cartContents = newArray;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
