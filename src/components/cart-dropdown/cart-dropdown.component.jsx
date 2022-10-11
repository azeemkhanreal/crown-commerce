import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../store/cart/cartSlice";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = selectCartItems(useSelector((state) => state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
