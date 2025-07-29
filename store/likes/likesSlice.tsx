import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikesState {
  count: number;
}

const initialState: LikesState = {
  count: 0,
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    addByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, addByAmount } = likesSlice.actions;

export default likesSlice.reducer;
