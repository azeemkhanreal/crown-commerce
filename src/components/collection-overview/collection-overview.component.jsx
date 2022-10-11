import React from "react";
import { useSelector } from "react-redux";
import CategoryPage from "../../pages/collection/collection.component";
import { selectCollectionsForPreview } from "../../store/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const collections = selectCollectionsForPreview(
    useSelector((state) => state)
  );

  return (
    <div className="collection-overview">
      {collections
        .filter((collection, idx) => idx < 4)
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

export default CollectionOverview;
