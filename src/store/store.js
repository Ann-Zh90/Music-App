import { configureStore } from "@reduxjs/toolkit";

import userPart from "./user-part";
import gamePart from "./game-part";

const store = configureStore({
  reducer: { user: userPart.reducer, game: gamePart.reducer },
});

export default store;
