import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rigthAnswer: false,
  chosenSongInfo: null,
  questionNum: null,
  attemps: 0,
};

const gamePart = createSlice({
  name: "game",
  initialState,
  reducers: {
    setRigthAnswer(state, action) {
      state.rigthAnswer = action.payload;
    },
    setQuestionNum(state, action) {
      state.questionNum = action.payload;
    },
    setAttemps(state) {
      state.attemps = state.attemps + 1;
    },
    setChosenSongInfo(state, action) {
      state.chosenSongInfo = action.payload;
    },
  },
});

export const gameActions = gamePart.actions;

export default gamePart;
