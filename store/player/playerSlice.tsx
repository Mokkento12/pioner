import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  isPlaying: boolean;
  currentTrack: string | null;
}

const initialState: PlayerState = {
  isPlaying: false,
  currentTrack: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    setTrack: (state, action: PayloadAction<string>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    stop: (state) => {
      state.isPlaying = false;
      state.currentTrack = null;
    },
  },
});

export const { play, pause, setTrack, stop } = playerSlice.actions;
export default playerSlice.reducer;
