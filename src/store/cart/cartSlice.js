import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addCartItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const {
  toggleCartHidden,
  addCartItem,
  clearItemFromCart,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
