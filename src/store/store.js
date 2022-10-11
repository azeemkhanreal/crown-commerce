import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);

export default { store, persistor };
