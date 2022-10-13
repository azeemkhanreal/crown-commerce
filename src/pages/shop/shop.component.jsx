import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../store/shop/shopSlice";
import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "collections"),
      (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
        setIsLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path=":category"
          element={<CollectionPageWithSpinner isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
