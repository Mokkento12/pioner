import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import themeReducer from "./slices/theme/themeSlice";
import likesReducer from "./likes/likesSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    likes: likesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
