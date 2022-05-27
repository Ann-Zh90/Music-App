import { UserState } from "./user-part";

const state: UserState = {
  userName: "",
  totalScore: 0,
  musicData: [],
  isLoading: false,
};
export const testUseSelector = (fn: Function) => fn(state);
