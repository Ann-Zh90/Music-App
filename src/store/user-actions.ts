import { AnyAction } from "redux";
import { RootState } from "./store";
import { ThunkAction } from "redux-thunk";

import { userActions } from "./user-part";

export const fetchMusicData = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    dispatch(userActions.toggleIsLoading(true));
    const fetchData = async () => {
      const response = await fetch(
        "https://levi9-song-quiz.herokuapp.com/api/data"
      );
      const data = await response.json();
      return data;
    };

    const musicData = await fetchData();
    dispatch(userActions.setMusicData(musicData));
    dispatch(userActions.toggleIsLoading(false));
  };
};
