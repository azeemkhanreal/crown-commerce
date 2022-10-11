import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { addCartItem } from "../../store/cart/cartSlice";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton inverted onClick={() => dispatch(addCartItem(item))}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
