import { useDispatch } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addCartItem,
  clearItemFromCart,
  removeCartItem,
} from "../../store/cart/cartSlice";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeCartItem(cartItem))}
        >
          &#10094;
        </div>
        <div className="value">{cartItem.quantity}</div>
        <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
