import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../store/cartSlice";
import "./cart-icon.styles.scss";

const cartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <div className="shopping-icon-container">
        <ShoppingIcon className="shopping-icon" />
      </div>
      <span className="item-count">1</span>
    </div>
  );
};

export default cartIcon;
