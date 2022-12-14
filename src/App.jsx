import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./pages/homepage/homepage.component";
import { Routes, Route, Navigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import "./app.styles.scss";
import Header from "./components/header/header.component";
import Auth from "./pages/auth/auth.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { SET_CURRENT_USER } from "./store/user/userSlice";
import { selectCurrentUser } from "./store/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = selectCurrentUser(useSelector((state) => state));

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          dispatch(
            SET_CURRENT_USER({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }

      dispatch(SET_CURRENT_USER(userAuth));
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" replace /> : <Auth />}
        />
      </Routes>
    </div>
  );
};

export default App;
