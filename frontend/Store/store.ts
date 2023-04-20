import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./slice";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "school",
  storage,
};

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });


  // const persistedReducer = persistReducer(persistConfig, rootReducer);
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);