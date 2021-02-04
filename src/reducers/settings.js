import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    themeId: 0,
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeId = state.themeId === 1 ? 0 : 1;
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
