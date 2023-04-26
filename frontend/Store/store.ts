import { configureStore, ThunkAction, Action,  combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice";
import { themeSlice } from "./themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
   
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side

    const persistConfig = {
      key: "nextjs",
      whitelist: ["auth","theme"], // make sure it does not clash with server keys
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== "production",
      
    });

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);