import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  value: "light" | "dark";
};

const initialState: ThemeState = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.value = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
