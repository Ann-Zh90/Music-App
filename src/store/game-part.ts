import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChosenSong {
  id: string;
  title: string;
}
interface GameState {
  rigthAnswer: boolean;
  chosenSongInfo: ChosenSong | null;
  questionNum: number | null;
  attemps: number;
  isSongPlaying: boolean;
  errorMessage: string | null;
}

const initialState: GameState = {
  rigthAnswer: false,
  chosenSongInfo: null,
  questionNum: null,
  attemps: 0,
  isSongPlaying: false,
  errorMessage: null,
};

const gamePart = createSlice({
  name: "game",
  initialState,
  reducers: {
    setRigthAnswer(state, action: PayloadAction<boolean>) {
      state.rigthAnswer = action.payload;
    },
    setQuestionNum(state, action: PayloadAction<number>) {
      state.questionNum = action.payload;
    },
    setAttemps(state) {
      state.attemps = state.attemps + 1;
    },
    setChosenSongInfo(state, action: PayloadAction<ChosenSong | null>) {
      state.chosenSongInfo = action.payload;
    },
    toggleIsSongPlaying(state) {
      state.isSongPlaying = !state.isSongPlaying;
    },
    showError(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const gameActions = gamePart.actions;

export default gamePart;
