import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./slice";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
