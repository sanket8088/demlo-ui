import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface themeState {
  themeState: boolean;
}

// Initial state
const initialState: themeState = {
  themeState: true,
};

// Actual Slice
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Action to set the themeentication status
    setThemeState(state: { themeState: any; }, action: { payload: any; }) {
      state.themeState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state: any, action: { payload: { theme: any; }; }) => {
      return {
        ...state,
        ...action.payload.theme,
      };
    },
  },
});

export const { setThemeState } = themeSlice.actions;

export const selectThemeState = (state: AppState) => state.theme.themeState;

export default themeSlice.reducer;
