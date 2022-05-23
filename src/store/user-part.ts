import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
  totalScore: number;
  musicData: Array<MusicGenre>;
  isLoading: boolean;
}
interface Song {
  id: string;
  songTitle: string;
  image: string;
  audio: string;
  description: string;
}
interface MusicGenre {
  id: number;
  genre: string;
  name: [Song];
}

const initialState: UserState = {
  userName: "",
  totalScore: 0,
  musicData: [],
  isLoading: false,
};

const userPart = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInit(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setMusicData(state, action: PayloadAction<Array<MusicGenre>>) {
      state.musicData = action.payload;
    },

    toggleIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    countTotalScore(state, action) {
      state.totalScore = state.totalScore + action.payload;
    },

    resetTotalScore(state) {
      state.totalScore = 0;
    },
  },
});

export const userActions = userPart.actions;

export default userPart;
