import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CandidateState {
  [id: string]: number;
}

const initialState: CandidateState = {
  alice: 0,
  bob: 0,
  charlie: 0,
};

const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    vote: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      if (state[id] !== undefined) {
        state[id] += 1;
      }
    },
    resetVotes: (state) => {
      Object.keys(state).forEach((id) => {
        state[id] = 0;
      });
    },
  },
});

export const { vote, resetVotes } = voteSlice.actions;
export default voteSlice.reducer;
