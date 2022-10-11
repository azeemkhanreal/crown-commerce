import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../store/cart.selectors";
import { toggleCartHidden } from "../../store/cartSlice";
import "./cart-icon.styles.scss";

const cartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <div className="shopping-icon-container">
        <ShoppingIcon className="shopping-icon" />
      </div>
      <span className="item-count">
        {selectCartItemsCount(useSelector((state) => state))}
      </span>
    </div>
  );
};

export default cartIcon;
