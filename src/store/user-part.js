import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  totalScore: 0,
  musicData: [],
  isLoading: false,
};

const userPart = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInit(state, action) {
      state.userName = action.payload;
    },
    setMusicData(state, action) {
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
