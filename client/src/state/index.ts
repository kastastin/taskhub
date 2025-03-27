import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateTypes = {
  isSidebarOpen: boolean;
  isDarkModeActive: boolean;
};

const initialState: InitialStateTypes = {
  isSidebarOpen: true,
  isDarkModeActive: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setIsDarkModeActive: (state, action: PayloadAction<boolean>) => {
      state.isDarkModeActive = action.payload;
    },
  },
});

export const { setIsSidebarOpen, setIsDarkModeActive } = globalSlice.actions;

export default globalSlice.reducer;
