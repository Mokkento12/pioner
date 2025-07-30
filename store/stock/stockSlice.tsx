import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StockState {
  count: number;
}

const initialState: StockState = {
  count: 0,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.count = Math.max(state.count - action.payload, 0);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { add, remove, reset } = stockSlice.actions;
export default stockSlice.reducer;
