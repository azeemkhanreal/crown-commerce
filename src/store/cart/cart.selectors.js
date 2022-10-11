import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  }
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
  }
);
