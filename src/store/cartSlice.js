import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";

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
  },
});

export const { toggleCartHidden, addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
