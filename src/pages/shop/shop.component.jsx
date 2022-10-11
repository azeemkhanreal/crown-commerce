import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { selectCollections } from "../../store/shop/shop.selectors";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path=":category" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
