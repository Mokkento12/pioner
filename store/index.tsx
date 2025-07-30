import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import themeReducer from "./slices/theme/themeSlice";
import likesReducer from "./likes/likesSlice";
import stockReducer from "./stock/stockSlice";
import voteReducer from "./vote/voteSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    likes: likesReducer,
    stock: stockReducer,
    vote: voteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
