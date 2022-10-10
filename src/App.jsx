import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./pages/homepage/homepage.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import "./app.styles.scss";
import Header from "./components/header/header.component";
import Auth from "./pages/auth/auth.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { SET_CURRENT_USER } from "./store/userSlice";

const Hats = () => {
  return <h1>Hats</h1>;
};

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

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
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/hats" element={<Hats />} />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" replace /> : <Auth />}
        />
      </Routes>
    </Router>
  );
};

export default App;
